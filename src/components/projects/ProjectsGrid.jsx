import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectSingle from './ProjectSingle';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
	const {
		projects,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
	} = useContext(ProjectsContext);

	return (
		<section>
			<div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
				<div className="relative flex-1 max-w-md w-full">
					<FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark w-5 h-5" />
					<input
						onChange={(e) => {
							setSearchProject(e.target.value);
						}}
						className="w-full pl-12 pr-4 py-3 border border-ternary-light dark:border-ternary-dark rounded-lg bg-primary-light dark:bg-primary-dark text-text-primary-light dark:text-text-primary-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-all"
						id="name"
						name="name"
						type="search"
						placeholder="Search projects..."
						aria-label="Search"
					/>
				</div>

				<ProjectsFilter setSelectProject={setSelectProject} />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{selectProject
					? selectProjectsByCategory.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								url={project.url}
								description={project.description}
								key={project.id}
							/>
					  ))
					: searchProject
					? searchProjectsByTitle.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								url={project.url}
								description={project.description}
								key={project.id}
							/>
					  ))
					: projects.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								url={project.url}
								description={project.description}
								key={project.id}
							/>
					  ))}
			</div>
		</section>
	);
};

export default ProjectsGrid;
