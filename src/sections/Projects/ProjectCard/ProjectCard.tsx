import {
	Button,
	ButtonGroup,
	Card as MuiCard,
	CardActions,
	CardContent,
	Link,
	Stack,
	Typography,
} from '@mui/material';

import { styled } from '@mui/material/styles';

import { Project } from 'types';

type ProjectCardProps = {
	project: Project;
};

const StyledLink = styled(Link)({
	color: 'inherit',
	textDecoration: 'none',
});

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const { projectTitle, githubLink, liveLink, description } = project;
	return (
		<MuiCard
			sx={{
				width: 400,
				minHeight: '300px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					sx={{
						fontWeight: 'bold',
						fontSize: '1.5rem',
						textAlign: 'center',
						padding: '10px',
					}}
				>
					{projectTitle}
				</Typography>
				<Stack
					sx={{
						padding: '12px',
					}}
				>
					{description.map((sentence) => {
						return (
							<Typography
								key={sentence}
								variant="body2"
								color="text.secondary"
								sx={{
									fontSize: '1.1rem',
									marginBottom: '10px',
								}}
							>
								{sentence}.
							</Typography>
						);
					})}
				</Stack>
			</CardContent>
			<CardActions
				sx={{
					justifyContent: 'center',
				}}
			>
				<ButtonGroup
					variant="text"
					aria-label="text button group"
					sx={{
						bottom: '10px',
						justifyContent: 'center',
						alignSelf: 'flex-end',
						justifySelf: 'flex-end',
					}}
				>
					{githubLink && (
						<Button
							variant="outlined"
							sx={{
								marginRight: '10px',
							}}
						>
							<StyledLink
								href={githubLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								Github
							</StyledLink>
						</Button>
					)}

					<Button
						variant="outlined"
						color="secondary"
						sx={{
							marginLeft: '10px',
						}}
					>
						<StyledLink
							href={liveLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							Live
						</StyledLink>
					</Button>
				</ButtonGroup>
			</CardActions>
		</MuiCard>
	);
};
