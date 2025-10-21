import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

const Portfolio = () => {
	return (
		<div className="bg-primary-light dark:bg-primary-dark">
			<Hero />
			<About />
			<Skills />
			<Experience />
			<Projects />
			<Contact />
		</div>
	);
};

export default Portfolio;
