import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
	return (
		<div className="min-h-screen bg-primary-light dark:bg-primary-dark pt-24 pb-16">
			<div className="container mx-auto max-w-6xl px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h1 className="text-5xl md:text-6xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
						Get In Touch
					</h1>
					<p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
						Have a project in mind or want to collaborate? Feel free to reach out!
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<ContactForm />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<ContactDetails />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
