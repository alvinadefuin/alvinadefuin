import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import profileImage from '../../images/profile.jpg';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="flex flex-col md:flex-row gap-12 items-center">
			<div className="w-full md:w-1/3">
				<img
					src={profileImage}
					className="rounded-2xl w-full shadow-2xl border border-ternary-light dark:border-ternary-dark"
					alt="Alvin Adefuin"
				/>
			</div>

			<div className="w-full md:w-2/3 space-y-4">
				{aboutMe.map((bio) => (
					<p
						className="text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
