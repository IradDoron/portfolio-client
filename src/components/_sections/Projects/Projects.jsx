import { useContext } from 'react';
import ThemeContext from '../../../theme/ThemeContext';
import AboutDataBlock from '../../_general/AboutDataBlock';
import ProjectCard from '../../_general/ProjectCard';
import ProjectDescription from '../../_general/ProjectDescription';
import ProjectLink from '../../_general/ProjectLink';
import SectionContainer from '../../_general/SectionContainer';
import SectionHeader from '../../_general/SectionHeader';
import SectionSubHeader from '../../_general/SectionSubHeader';

const projectsData = [
	{
		projectTitle: 'Project 1',
		githubLink: 'https://www.google.com/',
		liveLink: 'https://www.google.com/',
		description: 'lorem ipsum dolar peni shekel zloti yen',
	},
	{
		projectTitle: 'Project 2',
		githubLink: 'https://www.google.com/',
		liveLink: 'https://www.google.com/',
		description: 'lorem ipsum dolar peni shekel zloti yen',
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
