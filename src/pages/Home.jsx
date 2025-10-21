import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Home = () => {
	return (
		<div className="bg-primary-light dark:bg-primary-dark min-h-screen">
			<AppBanner />

			<section className="py-20 bg-secondary-light dark:bg-secondary-dark">
				<div className="container mx-auto max-w-7xl px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
							Featured Projects
						</h2>
						<p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
							A selection of my recent work in AI, full-stack development, and software engineering
						</p>
					</motion.div>

					<ProjectsProvider>
						<ProjectsGrid />
					</ProjectsProvider>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="mt-16 flex justify-center"
					>
						<Link
							to="/projects"
							className="inline-flex items-center gap-2 px-8 py-4 bg-accent-light dark:bg-accent-dark text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl group"
						>
							View all projects
							<FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default Home;
