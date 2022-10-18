import { useContext } from 'react';
import ThemeContext from '../../../theme/ThemeContext';
import ProjectCard from '../../_general/ProjectCard';
import ProjectDescription from '../../_general/ProjectDescription';
import ProjectLink from '../../_general/ProjectLink';
import SectionContainer from '../../_general/SectionContainer';
import SectionHeader from '../../_general/SectionHeader';
import SectionSubHeader from '../../_general/SectionSubHeader';

const projectsData = [
	{
		projectTitle: 'Esum Acisum',
		githubLink: 'https://github.com/IradDoron/esum-acisum-client-v2',
		liveLink: 'https://main--loquacious-zuccutto-671d0a.netlify.app/',
		description: [
			'A website for learning playing the piano',
			'I used React, Node.js, Express, TypeScript, an independent API I created, and the libraries Recoil (for state management), Styled Components (for styling) and ABCjs (for musical graphics).',
		],
	},
	{
		projectTitle: 'Find Da Note',
		githubLink: 'https://github.com/IradDoron/find-da-note',
		liveLink: 'https://main--effortless-licorice-e5157b.netlify.app/',
		description: [
			'A game where you have to find the right note according to given note, interval and direction.',
			'The game is written in React and uses the context and reducer hooks API for manage the logic and data.',
		],
	},
	{
		projectTitle: 'Battleship Real-time',
		githubLink: 'https://github.com/IradDoron/battleship-client',
		liveLink: 'https://battleship-irad.netlify.app/',
		description: [
			'I wrote a game similar to the classic battleship game, but with a real-time multiplayer.',
			'The game is written in React and uses Node.js and Socket.io for the server.',
		],
	},
];

function Projects() {
	const { theme } = useContext(ThemeContext);
	const color = theme.colors.blue;
	return (
		<>
			<SectionContainer color={color}>
				<SectionHeader color={color}>Projects</SectionHeader>
				{projectsData.map((project, index) => {
					return (
						<ProjectCard>
							<SectionSubHeader color={color}>
								{project.projectTitle}
							</SectionSubHeader>
							<ProjectLink linkType={'github'} href={project.githubLink} />
							<ProjectLink linkType={'live'} href={project.liveLink} />
							<ProjectDescription>{project.description}</ProjectDescription>
						</ProjectCard>
					);
				})}
			</SectionContainer>
		</>
	);
}

export default Projects;
