import { Stack, Typography } from '@mui/material';

export const Hero = () => {
	return (
		<Stack
			sx={{
				display: 'flex',
				width: '110%',
				height: '300px',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				borderRadius: '0 0 200px 200px',
				marginBottom: '100px',
				zIndex: 3,
				background:
					'linear-gradient(25deg, rgba(34,145,195,0.8270483193277311) 0%, rgba(251,92,48,0.6962359943977591) 97%, rgba(149,45,253,0.3477766106442577) 100%)',

				'&:hover': {
					boxShadow: '0 0 3px #fff, 0 0 5px #fff, 0 0 7px #0ff',
				},
			}}
		>
			<Stack
				sx={{
					flexDirection: 'row',
					justifyContent: 'center',
					gap: '48px',
				}}
			>
				<Typography
					variant="h1"
					sx={{
						fontSize: '4rem',
						fontWeight: 'bold',
						width: 'fit-content',
					}}
				>
					Irad Doron
				</Typography>
				<Typography
					variant="h1"
					sx={{
						fontSize: '4rem',
						width: 'fit-content',
					}}
				>
					Full Stack Developer
				</Typography>
			</Stack>
		</Stack>
	);
};
