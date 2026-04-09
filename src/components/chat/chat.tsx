'use client';
import { useChat } from '@ai-sdk/react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';

import ChatBottombar from '@/components/chat/chat-bottombar';
import ChatLanding from '@/components/chat/chat-landing';
import ChatMessageContent from '@/components/chat/chat-message-content';
import { PresetReply } from '@/components/chat/preset-reply';
import { presetReplies } from '@/lib/config-loader';
import HelperBoost from './HelperBoost';

// ClientOnly wrapper
//@ts-ignore
const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => { setHasMounted(true); }, []);
  if (!hasMounted) return null;
  return <>{children}</>;
};

interface AvatarProps { hasActiveTool: boolean; }

const Avatar = dynamic<AvatarProps>(
  () => Promise.resolve(({ hasActiveTool }: AvatarProps) => (
    <div className={`flex items-center justify-center rounded-full transition-all duration-300 ${hasActiveTool ? 'h-20 w-20' : 'h-28 w-28'}`}>
      <div className="relative cursor-pointer" onClick={() => (window.location.href = '/')}>
        <img
          src="/avatar.png"
          alt="Avatar"
          className="h-full w-full object-cover object-[center_top_-5%] scale-95 rounded-full"
        />
      </div>
    </div>
  )),
  { ssr: false }
);

// Small avatar for message thread
const MiniAvatar = () => (
  <div className="h-7 w-7 flex-shrink-0 rounded-full overflow-hidden ring-1 ring-gray-200 mt-0.5">
    <img src="/avatar.png" alt="AI" className="h-full w-full object-cover object-[center_top_-5%]" />
  </div>
);

const msgVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};

const Chat = () => {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('query');
  const [autoSubmitted, setAutoSubmitted] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [presetReply, setPresetReply] = useState<{
    question: string; reply: string; tool: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const {
    messages, input, handleInputChange, handleSubmit,
    isLoading, stop, setMessages, setInput, reload,
    addToolResult, append,
  } = useChat({
    onResponse: () => { setLoadingSubmit(false); },
    onFinish: () => { setLoadingSubmit(false); },
    onError: (error) => {
      setLoadingSubmit(false);
      console.error('Chat error:', error.message, error.cause);
      if (error.message?.includes('quota') || error.message?.includes('exceeded') || error.message?.includes('429')) {
        toast.error('⚠️ API Quota Exhausted! Free Groq API limit reached. Please contact Alvin directly or use preset questions. Thank you for understanding! 🙏', {
          duration: 6000,
          style: { background: '#fef3c7', border: '1px solid #f59e0b', color: '#92400e', fontSize: '14px', fontWeight: '500' },
        });
        setErrorMessage('quota_exhausted');
        try {
          append({ role: 'assistant', content: '⚠️ **API Quota Exhausted**\n\nFree Groq API limit reached. Please contact Alvin directly or use preset questions below.' });
        } catch (e) { console.error('Failed to append error message:', e); }
      } else if (error.message?.includes('network')) {
        toast.error('Network error. Please check your connection and try again.');
        setErrorMessage('Network error. Please check your connection and try again.');
      } else {
        toast.error(`Error: ${error.message}`);
        setErrorMessage(`Error: ${error.message}`);
      }
    },
    onToolCall: (tool) => { console.log('Tool call:', tool.toolCall.toolName); },
  });

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loadingSubmit]);

  const hasActiveTool = useMemo(() =>
    messages.some(m =>
      m.role === 'assistant' &&
      m.parts?.some(p => p.type === 'tool-invocation' && p.toolInvocation?.state === 'result')
    ), [messages]);

  const isToolInProgress = messages.some(
    m => m.role === 'assistant' &&
      m.parts?.some(p => p.type === 'tool-invocation' && p.toolInvocation?.state !== 'result')
  );

  //@ts-ignore
  const submitQuery = (query) => {
    if (!query.trim() || isToolInProgress) return;
    setErrorMessage(null);
    if (presetReplies[query]) {
      const preset = presetReplies[query];
      setPresetReply({ question: query, reply: preset.reply, tool: preset.tool });
      setLoadingSubmit(false);
      return;
    }
    setLoadingSubmit(true);
    setPresetReply(null);
    append({ role: 'user', content: query });
  };

  //@ts-ignore
  const submitQueryToAI = (query) => {
    if (!query.trim() || isToolInProgress) return;
    setErrorMessage(null);
    setLoadingSubmit(true);
    setPresetReply(null);
    append({ role: 'user', content: query });
  };

  //@ts-ignore
  const handlePresetReply = (question, reply, tool) => {
    setPresetReply({ question, reply, tool });
    setLoadingSubmit(false);
  };

  //@ts-ignore
  const handleGetAIResponse = (question) => {
    setPresetReply(null);
    submitQueryToAI(question);
  };

  useEffect(() => {
    if (initialQuery && !autoSubmitted) {
      setAutoSubmitted(true);
      setInput('');
      submitQuery(initialQuery);
    }
  }, [initialQuery, autoSubmitted]);

  //@ts-ignore
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isToolInProgress) return;
    submitQueryToAI(input);
    setInput('');
  };

  const handleStop = () => { stop(); setLoadingSubmit(false); };

  const isEmptyState = messages.length === 0 && !loadingSubmit && !presetReply && !errorMessage;
  const headerHeight = hasActiveTool ? 100 : 180;

  return (
    <div className="relative h-screen overflow-hidden bg-white">
      {/* Fixed Avatar Header */}
      <div
        className="fixed top-0 right-0 left-0 z-50 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 40%, rgba(255,255,255,0.8) 65%, rgba(255,255,255,0) 100%)',
        }}
      >
        <div className={`transition-all duration-300 ease-in-out ${hasActiveTool ? 'pt-6 pb-0' : 'py-6'}`}>
          <div className="flex justify-center pointer-events-auto">
            <ClientOnly>
              <Avatar hasActiveTool={hasActiveTool} />
            </ClientOnly>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto flex h-full max-w-2xl flex-col">
        {/* Scrollable thread */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-4"
          style={{ paddingTop: `${headerHeight}px`, paddingBottom: '8px' }}
        >
          <AnimatePresence mode="wait">
            {isEmptyState ? (
              <motion.div
                key="landing"
                className="flex min-h-full items-center justify-center"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ChatLanding submitQuery={submitQuery} handlePresetReply={handlePresetReply} />
              </motion.div>
            ) : presetReply && messages.length === 0 ? (
              <motion.div
                key="preset"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="pb-4"
              >
                <PresetReply
                  question={presetReply.question}
                  reply={presetReply.reply}
                  tool={presetReply.tool}
                  onGetAIResponse={handleGetAIResponse}
                  onClose={() => setPresetReply(null)}
                />
              </motion.div>
            ) : (
              <motion.div
                key="thread"
                className="flex flex-col gap-5 py-4"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}
              >
                {messages.map((message, i) => {
                  const isLast = i === messages.length - 1;

                  if (message.role === 'user') {
                    return (
                      <motion.div key={message.id} variants={msgVariants} initial="initial" animate="animate" className="flex justify-end">
                        <div className="max-w-[78%] rounded-2xl rounded-tr-md bg-gray-900 px-4 py-3 text-sm leading-relaxed text-white shadow-sm">
                          {message.content}
                        </div>
                      </motion.div>
                    );
                  }

                  // Skip empty assistant messages — typing indicator covers this state
                  if (!message.content.trim()) return null;

                  return (
                    <motion.div key={message.id} variants={msgVariants} initial="initial" animate="animate" className="flex items-start gap-2.5">
                      <MiniAvatar />
                      <div className="w-fit max-w-[82%]">
                        <div className="rounded-2xl rounded-tl-md bg-gray-50 border border-gray-100 px-4 py-3 text-sm leading-relaxed text-gray-800 shadow-sm">
                            <ChatMessageContent
                              message={message}
                              isLast={isLast}
                              isLoading={isLoading && isLast}
                              reload={reload}
                              addToolResult={addToolResult}
                              skipToolRendering
                            />
                          </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Loading bubble — show while AI hasn't produced visible content yet */}
                {isLoading && (() => {
                  const last = messages[messages.length - 1];
                  return last?.role === 'user' || (last?.role === 'assistant' && !last.content.trim());
                })() && (
                  <motion.div
                    variants={msgVariants} initial="initial" animate="animate"
                    className="flex items-start gap-2.5"
                  >
                    <MiniAvatar />
                    <div className="px-2 py-3">
                      <TypingIndicator />
                    </div>
                  </motion.div>
                )}

                {/* Quota error card */}
                {errorMessage === 'quota_exhausted' && (
                  <motion.div variants={msgVariants} initial="initial" animate="animate" className="flex items-start gap-2.5">
                    <MiniAvatar />
                    <div className="rounded-2xl rounded-tl-md border border-amber-200 bg-amber-50 px-4 py-4 shadow-sm max-w-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-base">⚠️</span>
                        <div>
                          <p className="text-sm font-semibold text-amber-800">API Quota Exhausted</p>
                          <p className="text-xs text-amber-600">Free Groq API limit reached</p>
                        </div>
                      </div>
                      <p className="text-xs text-amber-700 mb-3">
                        I'm using the <strong>free tier</strong> of Groq's API and today's quota has been reached.
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setErrorMessage(null);
                            const preset = presetReplies["How can I reach you?"];
                            if (preset) setPresetReply({ question: "How can I reach you?", reply: preset.reply, tool: preset.tool });
                          }}
                          className="px-3 py-1.5 bg-amber-500 text-white text-xs rounded-lg hover:bg-amber-600 transition-colors font-medium"
                        >
                          Contact me
                        </button>
                        <button
                          onClick={() => { setErrorMessage(null); window.location.href = '/'; }}
                          className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Use Presets
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={bottomRef} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom bar */}
        <div className="sticky bottom-0 bg-white px-2 pt-3 pb-4 md:px-0">
          <div className="relative flex flex-col items-center gap-3">
            <HelperBoost
              submitQuery={submitQuery}
              setInput={setInput}
              handlePresetReply={handlePresetReply}
            />
            <ChatBottombar
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={onSubmit}
              isLoading={isLoading}
              stop={handleStop}
              isToolInProgress={isToolInProgress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Animated typing indicator
const TypingIndicator = () => (
  <div className="flex items-center gap-1 h-5">
    {[0, 1, 2].map(i => (
      <motion.span
        key={i}
        className="block h-2 w-2 rounded-full bg-gray-400"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
      />
    ))}
  </div>
);

export default Chat;
