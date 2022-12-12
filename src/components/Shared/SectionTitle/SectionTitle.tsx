import { Typography } from '@mui/material';

export const SectionTitle = ({ title }: { title: string }) => {
	return (
		<Typography
			variant="h2"
			sx={{
				textShadow: '0 0 3px #fff, 0 0 5px #fff, 0 0 7px #0ff',
				fontWeight: 'bold',
				fontSize: '5rem',
				width: 'fit-content',
				margin: 'auto',
				marginTop: '68px',
			}}
		>
			{title}
		</Typography>
	);
};
