import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
import { useState } from 'react';

const Contact = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const contactInfo = [
		{
			icon: FiMail,
			label: 'Email',
			value: 'adefuinalvin1@gmail.com',
			link: 'mailto:adefuinalvin1@gmail.com'
		},
		{
			icon: FiPhone,
			label: 'Phone',
			value: '0919 698 3489',
			link: 'tel:09196983489'
		},
		{
			icon: FiMapPin,
			label: 'Location',
			value: 'Labuin, Santa Cruz, Laguna',
			link: null
		}
	];

	const socialLinks = [
		{ icon: FiGithub, url: 'https://github.com/alvinadefuin', label: 'GitHub' },
		{ icon: FiLinkedin, url: 'https://www.linkedin.com/in/alvinadefuin', label: 'LinkedIn' },
		{ icon: FiFacebook, url: 'https://www.facebook.com/adefuin17', label: 'Facebook' },
		{ icon: FiInstagram, url: 'https://www.instagram.com/alvinadefuin', label: 'Instagram' }
	];

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<section id="contact" className="py-20 bg-secondary-light dark:bg-secondary-dark">
			<div className="container mx-auto px-4">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-text-primary-light dark:text-text-primary-dark">
						Get In Touch
					</h2>
					<p className="text-center text-text-secondary-light dark:text-text-secondary-dark mb-16 max-w-2xl mx-auto">
						Have a project in mind or want to collaborate? Feel free to reach out!
					</p>

					<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<form action="https://formspree.io/f/xaygnpqd" method="POST" className="space-y-6">
								<div>
									<label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
										Name
									</label>
									<input
										type="text"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-lg bg-primary-light dark:bg-primary-dark border border-ternary-light dark:border-ternary-dark text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-all"
										placeholder="Your name"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
										Email
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-lg bg-primary-light dark:bg-primary-dark border border-ternary-light dark:border-ternary-dark text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-all"
										placeholder="your.email@example.com"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
										Subject
									</label>
									<input
										type="text"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-lg bg-primary-light dark:bg-primary-dark border border-ternary-light dark:border-ternary-dark text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-all"
										placeholder="What's this about?"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
										Message
									</label>
									<textarea
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows="5"
										className="w-full px-4 py-3 rounded-lg bg-primary-light dark:bg-primary-dark border border-ternary-light dark:border-ternary-dark text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-all resize-none"
										placeholder="Your message here..."
									></textarea>
								</div>
								<button
									type="submit"
									className="w-full px-8 py-4 bg-accent-light dark:bg-accent-dark text-white rounded-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300"
								>
									Send Message
								</button>
							</form>
						</motion.div>

						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="space-y-8"
						>
							<div className="space-y-6">
								{contactInfo.map((info, index) => {
									const Icon = info.icon;
									return (
										<div key={index} className="flex items-start gap-4">
											<div className="p-3 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg">
												<Icon className="text-accent-light dark:text-accent-dark" size={24} />
											</div>
											<div>
												<h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-1">
													{info.label}
												</h3>
												{info.link ? (
													<a
														href={info.link}
														className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
													>
														{info.value}
													</a>
												) : (
													<p className="text-text-secondary-light dark:text-text-secondary-dark">
														{info.value}
													</p>
												)}
											</div>
										</div>
									);
								})}
							</div>

							<div className="pt-8 border-t border-ternary-light dark:border-ternary-dark">
								<h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
									Connect with me
								</h3>
								<div className="flex gap-4">
									{socialLinks.map((social, index) => {
										const Icon = social.icon;
										return (
											<a
												key={index}
												href={social.url}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={social.label}
												className="p-3 bg-primary-light dark:bg-primary-dark rounded-lg border border-ternary-light dark:border-ternary-dark hover:border-accent-light dark:hover:border-accent-dark hover:scale-110 transition-all duration-300"
											>
												<Icon className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark" size={24} />
											</a>
										);
									})}
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
