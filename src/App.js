import { AnimatePresence } from 'framer-motion';
import Navbar from './components/shared/Navbar';
import Portfolio from './pages/Portfolio';
import { ProjectsProvider } from './context/ProjectsContext';
import './css/App.css';

function App() {
	return (
		<AnimatePresence>
			<div className="bg-primary-light dark:bg-primary-dark transition duration-300">
				<Navbar />
				<ProjectsProvider>
					<Portfolio />
				</ProjectsProvider>
			</div>
		</AnimatePresence>
	);
}

export default App;
