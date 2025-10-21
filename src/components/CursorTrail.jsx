import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorTrail = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [cursorVariant, setCursorVariant] = useState('default');

	useEffect(() => {
		const mouseMove = (e) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY
			});
		};

		const handleMouseEnter = () => setCursorVariant('hover');
		const handleMouseLeave = () => setCursorVariant('default');

		window.addEventListener('mousemove', mouseMove);

		// Add hover effect to interactive elements
		const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
		interactiveElements.forEach((el) => {
			el.addEventListener('mouseenter', handleMouseEnter);
			el.addEventListener('mouseleave', handleMouseLeave);
		});

		return () => {
			window.removeEventListener('mousemove', mouseMove);
			interactiveElements.forEach((el) => {
				el.removeEventListener('mouseenter', handleMouseEnter);
				el.removeEventListener('mouseleave', handleMouseLeave);
			});
		};
	}, []);

	const variants = {
		default: {
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
			scale: 1,
		},
		hover: {
			x: mousePosition.x - 24,
			y: mousePosition.y - 24,
			scale: 1.5,
		}
	};

	return (
		<>
			<motion.div
				className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 hidden md:block"
				variants={variants}
				animate={cursorVariant}
				transition={{
					type: "spring",
					stiffness: 500,
					damping: 28,
					mass: 0.5
				}}
			>
				<div className="w-full h-full rounded-full border-2 border-accent-light dark:border-accent-dark opacity-50"></div>
			</motion.div>

			<motion.div
				className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-50 hidden md:block"
				animate={{
					x: mousePosition.x - 4,
					y: mousePosition.y - 4,
				}}
				transition={{
					type: "spring",
					stiffness: 1000,
					damping: 35,
					mass: 0.2
				}}
			>
				<div className="w-full h-full rounded-full bg-accent-light dark:bg-accent-dark"></div>
			</motion.div>
		</>
	);
};

export default CursorTrail;
