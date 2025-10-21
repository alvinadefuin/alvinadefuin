import {
	FiFacebook,
	FiGithub,
	FiInstagram,
	FiLinkedin,
	FiMail
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/alvinadefuin',
	},
	{
		id: 2,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/alvinadefuin',
	},
	{
		id: 3,
		icon: <FiMail />,
		url: 'mailto:adefuinalvin1@gmail.com',
	},
	{
		id: 4,
		icon: <FiFacebook />,
		url: 'https://www.facebook.com/adefuin17',
	},
	{
		id: 5,
		icon: <FiInstagram />,
		url: 'https://www.instagram.com/alvinadefuin',
	},
];

const AppFooter = () => {
	return (
		<footer className="bg-secondary-light dark:bg-secondary-dark border-t border-ternary-light dark:border-ternary-dark mt-20">
			<div className="container mx-auto max-w-7xl px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					<div>
						<h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
							Alvin Adefuin
						</h3>
						<p className="text-text-secondary-light dark:text-text-secondary-dark">
							AI Software Developer specializing in full-stack development
						</p>
					</div>

					<div>
						<h4 className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark mb-4 uppercase tracking-wider">
							Quick Links
						</h4>
						<ul className="space-y-2">
							<li>
								<Link to="/" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors">
									Home
								</Link>
							</li>
							<li>
								<Link to="/projects" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors">
									Projects
								</Link>
							</li>
							<li>
								<Link to="/about" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors">
									About
								</Link>
							</li>
							<li>
								<Link to="/contact" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark mb-4 uppercase tracking-wider">
							Connect
						</h4>
						<div className="flex gap-3">
							{socialLinks.map((link) => (
								<a
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									key={link.id}
									className="p-2 rounded-lg bg-ternary-light dark:bg-ternary-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all"
								>
									<div className="text-xl">
										{link.icon}
									</div>
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="pt-8 border-t border-ternary-light dark:border-ternary-dark text-center text-sm text-text-secondary-light dark:text-text-secondary-dark">
					<p>&copy; {new Date().getFullYear()} Alvin Adefuin. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default AppFooter;
