import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayers } from 'react-icons/fi';
import AboutMeBio from '../components/about/AboutMeBio';
import { AboutMeProvider } from '../context/AboutMeContext';

const About = () => {
	const skills = [
		{
			icon: <FiCode className="w-8 h-8" />,
			title: "Frontend Development",
			items: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"]
		},
		{
			icon: <FiDatabase className="w-8 h-8" />,
			title: "Backend Development",
			items: ["Python", "Flask", "Node.js", "REST APIs"]
		},
		{
			icon: <FiLayers className="w-8 h-8" />,
			title: "AI & Tools",
			items: ["Machine Learning", "AI Integration", "Git", "Docker"]
		}
	];

	return (
		<div className="min-h-screen bg-primary-light dark:bg-primary-dark pt-24 pb-16">
			<AboutMeProvider>
				<div className="container mx-auto max-w-6xl px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-center mb-16"
					>
						<h1 className="text-5xl md:text-6xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
							About Me
						</h1>
						<p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
							AI Software Developer & Computer Science Graduate
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<AboutMeBio />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mt-20"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-12 text-center">
							Skills & Technologies
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{skills.map((skill, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="p-6 rounded-2xl bg-secondary-light dark:bg-secondary-dark border border-ternary-light dark:border-ternary-dark hover:border-accent-light dark:hover:border-accent-dark transition-all"
								>
									<div className="mb-4 text-accent-light dark:text-accent-dark">
										{skill.icon}
									</div>
									<h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
										{skill.title}
									</h3>
									<ul className="space-y-2">
										{skill.items.map((item, i) => (
											<li key={i} className="text-text-secondary-light dark:text-text-secondary-dark">
												{item}
											</li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</AboutMeProvider>
		</div>
	);
};

export default About;
