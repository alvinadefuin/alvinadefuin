import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section id="about" className="py-20 bg-secondary-light dark:bg-secondary-dark">
			<div className="container mx-auto px-4">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-primary-light dark:text-text-primary-dark">
						About Me
					</h2>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<div className="relative">
								<div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-accent-light to-accent-dark p-1">
									<div className="w-full h-full rounded-full bg-secondary-light dark:bg-secondary-dark flex items-center justify-center">
										<img
											src="/images/profile.jpg"
											alt="Alvin Adefuin"
											className="w-60 h-60 rounded-full object-cover"
											onError={(e) => {
												e.target.style.display = 'none';
												e.target.parentElement.innerHTML = '<div class="text-6xl">👨‍💻</div>';
											}}
										/>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="space-y-4"
						>
							<p className="text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
								I am an AI Software Developer with nearly one year of experience at Journey Better Business Group, Inc. I specialize in both frontend and backend development, using technologies like Python, Flask, JavaScript, and React.
							</p>
							<p className="text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
								My work includes developing AI features, managing backend services, and creating efficient API endpoints. I am passionate about continuous learning and teamwork, and I thrive in dynamic environments that value innovation.
							</p>
							<div className="pt-6">
								<a
									href="/files/AdefuinAlvin-CV.pdf"
									download
									className="inline-flex items-center gap-2 px-6 py-3 bg-accent-light dark:bg-accent-dark text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
								>
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
									</svg>
									Download Resume
								</a>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
