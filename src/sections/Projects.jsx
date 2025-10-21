import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useContext } from 'react';
import { ProjectsContext } from '../context/ProjectsContext';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const { projects } = useContext(ProjectsContext);
	const featuredProjects = projects.slice(0, 6);

	return (
		<section id="projects" className="py-20">
			<div className="container mx-auto px-4">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-text-primary-light dark:text-text-primary-dark">
						Featured Projects
					</h2>
					<p className="text-center text-text-secondary-light dark:text-text-secondary-dark mb-12 max-w-2xl mx-auto">
						Here are some of my recent projects showcasing my skills in AI, full-stack development, and software engineering
					</p>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
						{featuredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 50 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="group relative rounded-2xl overflow-hidden bg-secondary-light dark:bg-secondary-dark border border-ternary-light dark:border-ternary-dark hover:shadow-2xl transition-all duration-300"
							>
								<div className="relative h-48 overflow-hidden">
									<img
										src={project.img}
										alt={project.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
										<a
											href={project.url}
											target="_blank"
											rel="noopener noreferrer"
											className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
										>
											<FiExternalLink className="text-white" size={20} />
										</a>
										{project.github && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
											>
												<FiGithub className="text-white" size={20} />
											</a>
										)}
									</div>
								</div>
								<div className="p-6">
									<div className="mb-3">
										<span className="inline-block px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark text-xs font-medium rounded-full">
											{project.category}
										</span>
									</div>
									<h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-2 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
										{project.title}
									</h3>
									<p className="text-text-secondary-light dark:text-text-secondary-dark text-sm line-clamp-3">
										{project.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
