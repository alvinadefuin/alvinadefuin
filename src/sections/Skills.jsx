import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiPython, SiJavascript, SiReact, SiFlask, SiNodedotjs, SiTailwindcss, SiGit, SiDocker } from 'react-icons/si';

const Skills = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const skills = [
		{ name: 'Python', icon: SiPython, color: '#3776AB' },
		{ name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
		{ name: 'React', icon: SiReact, color: '#61DAFB' },
		{ name: 'Flask', icon: SiFlask, color: '#000000' },
		{ name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
		{ name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
		{ name: 'Git', icon: SiGit, color: '#F05032' },
		{ name: 'Docker', icon: SiDocker, color: '#2496ED' },
	];

	return (
		<section id="skills" className="py-20">
			<div className="container mx-auto px-4">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-primary-light dark:text-text-primary-dark">
						Skills & Technologies
					</h2>

					<div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
						{skills.map((skill, index) => {
							const Icon = skill.icon;
							return (
								<motion.div
									key={skill.name}
									initial={{ opacity: 0, scale: 0.5 }}
									animate={inView ? { opacity: 1, scale: 1 } : {}}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-secondary-light dark:bg-secondary-dark hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
								>
									<div className="relative">
										<Icon
											size={64}
											className="text-text-secondary-light dark:text-text-secondary-dark group-hover:scale-110 transition-transform duration-300"
											style={{ color: skill.color }}
										/>
									</div>
									<span className="text-text-primary-light dark:text-text-primary-dark font-medium">
										{skill.name}
									</span>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
