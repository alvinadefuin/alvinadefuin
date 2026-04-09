'use client';

// This component is kept for backwards compatibility.
// The main chat thread rendering is now handled inline in chat.tsx.

import { ChatRequestOptions } from 'ai';
import { Message } from 'ai/react';
import { motion } from 'framer-motion';
import ChatMessageContent from './chat-message-content';
import ToolRenderer from './tool-renderer';

interface SimplifiedChatViewProps {
  message: Message;
  isLoading: boolean;
  reload: (chatRequestOptions?: ChatRequestOptions) => Promise<string | null | undefined>;
  addToolResult?: (args: { toolCallId: string; result: string }) => void;
}

export function SimplifiedChatView({ message, isLoading, reload, addToolResult }: SimplifiedChatViewProps) {
  if (message.role !== 'assistant') return null;

  const toolInvocations = (message.parts ?? [])
    .filter(p => p.type === 'tool-invocation' && p.toolInvocation?.state === 'result')
    .map(p => p.type === 'tool-invocation' ? p.toolInvocation : null)
    .filter(Boolean);

  const hasTools = toolInvocations.length > 0;
  const hasText = message.content.trim().length > 0;
  const showText = hasText && (!hasTools || message.content.trim().length > 50);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col gap-3 px-4"
    >
      {hasTools && (
        <ToolRenderer toolInvocations={toolInvocations} messageId={message.id || 'msg'} />
      )}
      {showText && (
        <div className="rounded-2xl rounded-tl-md bg-gray-50 border border-gray-100 px-4 py-3 text-sm text-gray-800">
          <ChatMessageContent
            message={message} isLast isLoading={isLoading}
            reload={reload} addToolResult={addToolResult} skipToolRendering
          />
        </div>
      )}
    </motion.div>
  );
}
