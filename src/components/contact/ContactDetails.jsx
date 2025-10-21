import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Labuin, Santa Cruz, Laguna',
		icon: <FiMapPin />,
		link: null,
	},
	{
		id: 2,
		name: 'adefuinalvin1@gmail.com',
		icon: <FiMail />,
		link: 'mailto:adefuinalvin1@gmail.com',
	},
	{
		id: 3,
		name: '0919 698 3489',
		icon: <FiPhone />,
		link: 'tel:09196983489',
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full h-full flex flex-col justify-center">
			<div className="p-8 bg-secondary-light dark:bg-secondary-dark rounded-2xl border border-ternary-light dark:border-ternary-dark">
				<h2 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-8">
					Contact Information
				</h2>
				<div className="space-y-6">
					{contacts.map((contact) => (
						<div key={contact.id} className="flex items-start gap-4">
							<div className="p-3 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg text-accent-light dark:text-accent-dark">
								<div className="text-xl">
									{contact.icon}
								</div>
							</div>
							<div>
								{contact.link ? (
									<a
										href={contact.link}
										className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
									>
										{contact.name}
									</a>
								) : (
									<span className="text-text-secondary-light dark:text-text-secondary-dark">
										{contact.name}
									</span>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
