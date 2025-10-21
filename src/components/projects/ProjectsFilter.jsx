const selectOptions = [
	'Web Application',
	'Mobile Application',
	'UI/UX Design',
];

const ProjectsFilter = ({ setSelectProject }) => {
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="px-4 py-3 border border-ternary-light dark:border-ternary-dark rounded-lg bg-primary-light dark:bg-primary-dark text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-all"
			defaultValue=""
		>
			<option value="">All Projects</option>

			{selectOptions.map((option) => (
				<option value={option} key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
