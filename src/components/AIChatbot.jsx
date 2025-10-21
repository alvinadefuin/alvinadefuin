import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';

const AIChatbot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([
		{
			type: 'bot',
			text: 'Hi! I\'m Alvin\'s AI assistant. How can I help you learn more about his work and skills?'
		}
	]);
	const [input, setInput] = useState('');
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const presetQuestions = [
		"What are Alvin's skills?",
		"What projects has he worked on?",
		"Tell me about his experience",
		"How can I contact him?"
	];

	const getAIResponse = (userMessage) => {
		const msg = userMessage.toLowerCase();

		if (msg.includes('skill') || msg.includes('technology') || msg.includes('tech stack')) {
			return "Alvin specializes in Python, JavaScript, React, Flask, and Node.js. He has experience with AI/ML, full-stack development, API design, and backend services. He's also proficient in Git, Docker, and Tailwind CSS.";
		}

		if (msg.includes('project')) {
			return "Alvin has worked on various projects including AI-powered applications, web development, and backend services. You can check out his featured projects section to see examples of his work in AI integration and full-stack development.";
		}

		if (msg.includes('experience') || msg.includes('work') || msg.includes('job')) {
			return "Alvin is an AI Software Developer with nearly one year of experience at Journey Better Business Group, Inc. He specializes in developing AI features, managing backend services with Flask and Python, and creating efficient API endpoints.";
		}

		if (msg.includes('contact') || msg.includes('email') || msg.includes('reach')) {
			return "You can reach Alvin at adefuinalvin1@gmail.com or call him at 0919 698 3489. He's also available on LinkedIn and GitHub. Feel free to use the contact form below!";
		}

		if (msg.includes('education') || msg.includes('graduate') || msg.includes('university')) {
			return "Alvin is a Computer Science graduate with a specialization in AI and Software Development. During his studies, he gained expertise in algorithms, data structures, and completed multiple web and mobile development projects.";
		}

		if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
			return "Hello! I'm here to help you learn more about Alvin's skills, experience, and projects. What would you like to know?";
		}

		return "That's a great question! I can tell you about Alvin's skills, projects, experience, or how to contact him. What would you like to know more about?";
	};

	const handleSend = () => {
		if (!input.trim()) return;

		const userMessage = { type: 'user', text: input };
		setMessages(prev => [...prev, userMessage]);

		setTimeout(() => {
			const botResponse = { type: 'bot', text: getAIResponse(input) };
			setMessages(prev => [...prev, botResponse]);
		}, 500);

		setInput('');
	};

	const handlePresetQuestion = (question) => {
		const userMessage = { type: 'user', text: question };
		setMessages(prev => [...prev, userMessage]);

		setTimeout(() => {
			const botResponse = { type: 'bot', text: getAIResponse(question) };
			setMessages(prev => [...prev, botResponse]);
		}, 500);
	};

	return (
		<>
			{/* Chat Button */}
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setIsOpen(!isOpen)}
				className="fixed bottom-6 right-6 z-50 p-4 bg-accent-light dark:bg-accent-dark text-white rounded-full shadow-2xl hover:shadow-3xl transition-all"
			>
				{isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
			</motion.button>

			{/* Chat Window */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 100, scale: 0.8 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 100, scale: 0.8 }}
						transition={{ duration: 0.3 }}
						className="fixed bottom-24 right-6 z-50 w-96 h-[32rem] bg-secondary-light dark:bg-secondary-dark rounded-2xl shadow-2xl border border-ternary-light dark:border-ternary-dark flex flex-col overflow-hidden"
					>
						{/* Header */}
						<div className="p-4 bg-accent-light dark:bg-accent-dark text-white">
							<h3 className="font-bold text-lg">AI Assistant</h3>
							<p className="text-sm opacity-90">Powered by Smart Responses</p>
						</div>

						{/* Messages */}
						<div className="flex-1 overflow-y-auto p-4 space-y-4">
							{messages.map((msg, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
								>
									<div
										className={`max-w-[80%] p-3 rounded-2xl ${
											msg.type === 'user'
												? 'bg-accent-light dark:bg-accent-dark text-white'
												: 'bg-primary-light dark:bg-primary-dark text-text-primary-light dark:text-text-primary-dark border border-ternary-light dark:border-ternary-dark'
										}`}
									>
										{msg.text}
									</div>
								</motion.div>
							))}
							<div ref={messagesEndRef} />
						</div>

						{/* Preset Questions */}
						{messages.length <= 2 && (
							<div className="px-4 pb-2">
								<p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-2">Quick questions:</p>
								<div className="flex flex-wrap gap-2">
									{presetQuestions.map((question, index) => (
										<button
											key={index}
											onClick={() => handlePresetQuestion(question)}
											className="text-xs px-3 py-1 bg-primary-light dark:bg-primary-dark border border-ternary-light dark:border-ternary-dark rounded-full hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors"
										>
											{question}
										</button>
									))}
								</div>
							</div>
						)}

						{/* Input */}
						<div className="p-4 border-t border-ternary-light dark:border-ternary-dark">
							<div className="flex gap-2">
								<input
									type="text"
									value={input}
									onChange={(e) => setInput(e.target.value)}
									onKeyPress={(e) => e.key === 'Enter' && handleSend()}
									placeholder="Ask me anything..."
									className="flex-1 px-4 py-2 bg-primary-light dark:bg-primary-dark border border-ternary-light dark:border-ternary-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark text-text-primary-light dark:text-text-primary-dark"
								/>
								<button
									onClick={handleSend}
									className="p-2 bg-accent-light dark:bg-accent-dark text-white rounded-lg hover:opacity-90 transition-opacity"
								>
									<FiSend size={20} />
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default AIChatbot;
