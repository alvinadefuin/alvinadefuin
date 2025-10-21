import { AnimatePresence } from 'framer-motion';
import Navbar from './components/shared/Navbar';
import Portfolio from './pages/Portfolio';
import AIChatbot from './components/AIChatbot';
import CursorTrail from './components/CursorTrail';
import { ProjectsProvider } from './context/ProjectsContext';
import './css/App.css';

function App() {
	return (
		<AnimatePresence>
			<div className="bg-primary-light dark:bg-primary-dark transition duration-300 cursor-none md:cursor-auto">
				<CursorTrail />
				<Navbar />
				<ProjectsProvider>
					<Portfolio />
				</ProjectsProvider>
				<AIChatbot />
			</div>
		</AnimatePresence>
	);
}

export default App;
