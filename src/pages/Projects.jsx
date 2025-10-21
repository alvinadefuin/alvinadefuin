import { motion } from 'framer-motion';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
	return (
		<div className="min-h-screen bg-primary-light dark:bg-primary-dark pt-24 pb-16">
			<ProjectsProvider>
				<div className="container mx-auto max-w-7xl px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-center mb-16"
					>
						<h1 className="text-5xl md:text-6xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
							Projects
						</h1>
						<p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
							Explore my portfolio of AI, full-stack, and software engineering projects
						</p>
					</motion.div>

					<ProjectsGrid />
				</div>
			</ProjectsProvider>
		</div>
	);
};

export default Projects;
