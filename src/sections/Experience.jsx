import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const Experience = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const experiences = [
		{
			title: 'AI Software Developer',
			company: 'Journey Better Business Group, Inc.',
			period: 'Present',
			duration: '~1 year',
			description: [
				'Developed AI features and integrations',
				'Managed backend services with Flask and Python',
				'Created efficient API endpoints',
				'Collaborated on full-stack development projects'
			]
		},
		{
			title: 'Computer Science Graduate',
			company: 'University',
			period: 'Graduated',
			duration: '',
			description: [
				'Specialized in AI and Software Development',
				'Gained expertise in algorithms and data structures',
				'Completed projects in web and mobile development'
			]
		}
	];

	return (
		<section id="experience" className="py-20 bg-secondary-light dark:bg-secondary-dark">
			<div className="container mx-auto px-4">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-text-primary-light dark:text-text-primary-dark">
						Experience
					</h2>

					<div className="max-w-4xl mx-auto">
						<div className="relative">
							{/* Timeline line */}
							<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent-light dark:bg-accent-dark"></div>

							{experiences.map((exp, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
									animate={inView ? { opacity: 1, x: 0 } : {}}
									transition={{ duration: 0.6, delay: index * 0.2 }}
									className={`relative mb-12 ${
										index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
									}`}
								>
									{/* Timeline dot */}
									<div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent-light dark:bg-accent-dark border-4 border-secondary-light dark:border-secondary-dark"></div>

									<div className="ml-20 md:ml-0 md:w-11/12 p-6 rounded-2xl bg-primary-light dark:bg-primary-dark border border-ternary-light dark:border-ternary-dark hover:shadow-2xl transition-all duration-300">
										<div className="flex items-center gap-2 mb-2 text-accent-light dark:text-accent-dark">
											<FiBriefcase />
											<span className="font-semibold">{exp.company}</span>
										</div>
										<h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-2">
											{exp.title}
										</h3>
										<div className="flex items-center gap-2 mb-4 text-text-secondary-light dark:text-text-secondary-dark">
											<FiCalendar size={14} />
											<span className="text-sm">
												{exp.period} {exp.duration && `• ${exp.duration}`}
											</span>
										</div>
										<ul className="space-y-2">
											{exp.description.map((item, i) => (
												<li
													key={i}
													className="text-text-secondary-light dark:text-text-secondary-dark flex items-start gap-2"
												>
													<span className="text-accent-light dark:text-accent-dark mt-1.5">•</span>
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Experience;
