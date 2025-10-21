import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			// Detect active section
			const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
			const current = sections.find(section => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (current) setActiveSection(current);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setShowMenu(false);
		}
	};

	const navItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'contact', label: 'Contact' }
	];

	return (
		<motion.nav
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-primary-light/80 dark:bg-primary-dark/80 backdrop-blur-md shadow-lg'
					: 'bg-transparent'
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					<button
						onClick={() => scrollToSection('home')}
						className="text-xl font-bold bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent hover:scale-105 transition-transform"
					>
						Alvin Adefuin
					</button>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={`text-sm font-medium transition-all duration-300 relative ${
									activeSection === item.id
										? 'text-accent-light dark:text-accent-dark'
										: 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark'
								}`}
							>
								{item.label}
								{activeSection === item.id && (
									<motion.div
										layoutId="activeSection"
										className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-light dark:bg-accent-dark"
									/>
								)}
							</button>
						))}

						<button
							onClick={() => setTheme(activeTheme)}
							aria-label="Theme Switcher"
							className="p-2 rounded-lg hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors"
						>
							{activeTheme === 'dark' ? (
								<FiSun className="w-5 h-5 text-text-secondary-dark hover:text-text-primary-dark" />
							) : (
								<FiMoon className="w-5 h-5 text-text-secondary-light hover:text-text-primary-light" />
							)}
						</button>
					</div>

					{/* Mobile Menu Button */}
					<div className="flex md:hidden items-center gap-4">
						<button
							onClick={() => setTheme(activeTheme)}
							aria-label="Theme Switcher"
							className="p-2 rounded-lg hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors"
						>
							{activeTheme === 'dark' ? (
								<FiSun className="w-5 h-5" />
							) : (
								<FiMoon className="w-5 h-5" />
							)}
						</button>

						<button
							onClick={() => setShowMenu(!showMenu)}
							className="p-2 text-text-primary-light dark:text-text-primary-dark"
							aria-label="Menu"
						>
							{showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{showMenu && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden border-t border-ternary-light dark:border-ternary-dark"
					>
						<div className="flex flex-col py-4 gap-4">
							{navItems.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className={`text-sm font-medium py-2 text-left ${
										activeSection === item.id
											? 'text-accent-light dark:text-accent-dark'
											: 'text-text-secondary-light dark:text-text-secondary-dark'
									}`}
								>
									{item.label}
								</button>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
};

export default Navbar;
