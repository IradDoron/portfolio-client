import { Stack } from '@mui/material';

import { projects } from 'resources';

import { SectionTitle } from 'components/Shared/SectionTitle';
import { ProjectCard } from 'sections/Projects/ProjectCard';

export const Projects = () => {
	return (
		<Stack>
			<SectionTitle title="Projects" />
			<Stack
				direction="row"
				justifyContent="center"
				sx={{
					flexWrap: 'wrap',
					'& > *': { margin: '20px' },
					width: '100%',
					zIndex: 3,
				}}
			>
				{projects.map((project) => {
					const title = project.projectTitle;
					return <ProjectCard key={title} project={project} />;
				})}
			</Stack>
		</Stack>
	);
};
