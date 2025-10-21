import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AppBanner = () => {
	return (
		<section className="min-h-screen flex items-center justify-center pt-20 pb-16">
			<div className="container mx-auto max-w-6xl px-4">
				<div className="flex flex-col items-center text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="mb-6"
					>
						<span className="inline-block px-4 py-2 bg-secondary-light dark:bg-secondary-dark rounded-full text-sm font-medium text-accent-light dark:text-accent-dark mb-6">
							Available for work
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6 leading-tight"
					>
						Alvin Adefuin
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-xl md:text-2xl text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mb-12"
					>
						AI Software Developer specializing in full-stack development with Python, React, and Flask
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="flex flex-wrap gap-4 justify-center mb-12"
					>
						<Link
							to="/contact"
							className="px-8 py-4 bg-accent-light dark:bg-accent-dark text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
						>
							Get in touch
						</Link>
						<a
							download="AdefuinAlvin-CV.pdf"
							href="/files/AdefuinAlvin-CV.pdf"
							className="px-8 py-4 bg-secondary-light dark:bg-secondary-dark text-text-primary-light dark:text-text-primary-dark rounded-lg font-medium hover:bg-ternary-light dark:hover:bg-ternary-dark transition-all flex items-center gap-2"
						>
							<FiDownload className="w-5 h-5" />
							Download CV
						</a>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="flex gap-6"
					>
						<a
							href="https://github.com/alvinadefuin"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-lg bg-secondary-light dark:bg-secondary-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
							aria-label="GitHub"
						>
							<FiGithub className="w-6 h-6" />
						</a>
						<a
							href="https://linkedin.com/in/alvinadefuin"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-lg bg-secondary-light dark:bg-secondary-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
							aria-label="LinkedIn"
						>
							<FiLinkedin className="w-6 h-6" />
						</a>
						<a
							href="mailto:alvin@example.com"
							className="p-3 rounded-lg bg-secondary-light dark:bg-secondary-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
							aria-label="Email"
						>
							<FiMail className="w-6 h-6" />
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AppBanner;
