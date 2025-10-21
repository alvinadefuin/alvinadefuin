import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';

const Hero = () => {
	const scrollToSection = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
			{/* Animated background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-accent-light/5 via-transparent to-accent-dark/5 dark:from-accent-dark/10 dark:via-transparent dark:to-accent-light/10"></div>

			<div className="container mx-auto px-4 py-20 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent">
							Alvin Adefuin
						</h1>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h2 className="text-2xl md:text-4xl font-medium text-text-primary-light dark:text-text-primary-dark mb-4">
							AI Software Developer
						</h2>
						<p className="text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mb-12">
							Crafting intelligent solutions with Python, React, and Flask. Passionate about AI and full-stack development.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="flex flex-wrap gap-4 justify-center mb-12"
					>
						<button
							onClick={() => scrollToSection('contact')}
							className="px-8 py-4 bg-accent-light dark:bg-accent-dark text-white rounded-full font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300"
						>
							Get In Touch
						</button>
						<button
							onClick={() => scrollToSection('projects')}
							className="px-8 py-4 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark rounded-full font-medium hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-300"
						>
							View Projects
						</button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="flex gap-6 justify-center"
					>
						<a
							href="https://github.com/alvinadefuin"
							target="_blank"
							rel="noopener noreferrer"
							className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark hover:scale-110 transition-all duration-300"
						>
							<FiGithub size={28} />
						</a>
						<a
							href="https://linkedin.com/in/alvinadefuin"
							target="_blank"
							rel="noopener noreferrer"
							className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark hover:scale-110 transition-all duration-300"
						>
							<FiLinkedin size={28} />
						</a>
						<a
							href="mailto:adefuinalvin1@gmail.com"
							className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark hover:scale-110 transition-all duration-300"
						>
							<FiMail size={28} />
						</a>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.button
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 1 }}
				onClick={() => scrollToSection('about')}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors animate-bounce"
			>
				<FiChevronDown size={32} />
			</motion.button>
		</section>
	);
};

export default Hero;
