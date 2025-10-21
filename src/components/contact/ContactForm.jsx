import FormInput from '../reusable/FormInput';

const ContactForm = () => {
	return (
		<div className="w-full">
			<form
				action="https://formspree.io/f/xaygnpqd"
				method="POST"
				className="p-8 bg-secondary-light dark:bg-secondary-dark rounded-2xl border border-ternary-light dark:border-ternary-dark"
			>
				<h2 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6">
					Send a Message
				</h2>

				<FormInput
					inputLabel="Full Name"
					labelFor="name"
					inputType="text"
					inputId="name"
					inputName="name"
					placeholderText="Your Name"
					ariaLabelName="Name"
				/>
				<FormInput
					inputLabel="Email"
					labelFor="email"
					inputType="email"
					inputId="email"
					inputName="email"
					placeholderText="your.email@example.com"
					ariaLabelName="Email"
				/>
				<FormInput
					inputLabel="Subject"
					labelFor="subject"
					inputType="text"
					inputId="subject"
					inputName="subject"
					placeholderText="What's this about?"
					ariaLabelName="Subject"
				/>

				<div className="mt-6">
					<label
						className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2"
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						className="w-full px-4 py-3 border border-ternary-light dark:border-ternary-dark text-text-primary-light dark:text-text-primary-dark bg-primary-light dark:bg-primary-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-all"
						id="message"
						name="message"
						rows="6"
						placeholder="Your message here..."
						aria-label="Message"
					></textarea>
				</div>

				<button
					type="submit"
					className="w-full mt-6 px-8 py-4 bg-accent-light dark:bg-accent-dark text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
					aria-label="Send Message"
				>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
