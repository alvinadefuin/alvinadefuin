import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();
	const location = useLocation();

	function toggleMenu() {
		setShowMenu(!showMenu);
	}

	const isActive = (path) => {
		return location.pathname === path;
	};

	return (
		<motion.nav
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="fixed top-0 left-0 right-0 z-50 bg-primary-light/80 dark:bg-primary-dark/80 backdrop-blur-md border-b border-ternary-light dark:border-ternary-dark"
		>
			<div className="container mx-auto max-w-7xl">
				<div className="flex justify-between items-center py-4 px-4 sm:px-0">
					<Link
						to="/"
						className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
					>
						Alvin Adefuin
					</Link>

					<div className="hidden md:flex items-center gap-8">
						<Link
							to="/"
							className={`text-sm font-medium transition-colors ${
								isActive('/')
									? 'text-accent-light dark:text-accent-dark'
									: 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark'
							}`}
						>
							Home
						</Link>
						<Link
							to="/projects"
							className={`text-sm font-medium transition-colors ${
								isActive('/projects')
									? 'text-accent-light dark:text-accent-dark'
									: 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark'
							}`}
						>
							Projects
						</Link>
						<Link
							to="/about"
							className={`text-sm font-medium transition-colors ${
								isActive('/about')
									? 'text-accent-light dark:text-accent-dark'
									: 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark'
							}`}
						>
							About
						</Link>
						<Link
							to="/contact"
							className={`text-sm font-medium transition-colors ${
								isActive('/contact')
									? 'text-accent-light dark:text-accent-dark'
									: 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark'
							}`}
						>
							Contact
						</Link>

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

					<div className="flex md:hidden items-center gap-4">
						<button
							onClick={() => setTheme(activeTheme)}
							aria-label="Theme Switcher"
							className="p-2 rounded-lg hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors"
						>
							{activeTheme === 'dark' ? (
								<FiSun className="w-5 h-5 text-text-secondary-dark" />
							) : (
								<FiMoon className="w-5 h-5 text-text-secondary-light" />
							)}
						</button>

						<button
							onClick={toggleMenu}
							className="p-2 text-text-primary-light dark:text-text-primary-dark"
							aria-label="Menu"
						>
							{showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
						</button>
					</div>
				</div>

				{showMenu && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden border-t border-ternary-light dark:border-ternary-dark"
					>
						<div className="flex flex-col py-4 px-4 gap-4">
							<Link
								to="/"
								onClick={() => setShowMenu(false)}
								className={`text-sm font-medium py-2 ${
									isActive('/')
										? 'text-accent-light dark:text-accent-dark'
										: 'text-text-secondary-light dark:text-text-secondary-dark'
								}`}
							>
								Home
							</Link>
							<Link
								to="/projects"
								onClick={() => setShowMenu(false)}
								className={`text-sm font-medium py-2 ${
									isActive('/projects')
										? 'text-accent-light dark:text-accent-dark'
										: 'text-text-secondary-light dark:text-text-secondary-dark'
								}`}
							>
								Projects
							</Link>
							<Link
								to="/about"
								onClick={() => setShowMenu(false)}
								className={`text-sm font-medium py-2 ${
									isActive('/about')
										? 'text-accent-light dark:text-accent-dark'
										: 'text-text-secondary-light dark:text-text-secondary-dark'
								}`}
							>
								About
							</Link>
							<Link
								to="/contact"
								onClick={() => setShowMenu(false)}
								className={`text-sm font-medium py-2 ${
									isActive('/contact')
										? 'text-accent-light dark:text-accent-dark'
										: 'text-text-secondary-light dark:text-text-secondary-dark'
								}`}
							>
								Contact
							</Link>
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
};

export default AppHeader;
