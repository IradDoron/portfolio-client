import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledHeroContainer = styled(Stack)(({ theme }) => ({
	display: 'flex',
	width: '100%',
	overflow: 'hidden',
	height: '300px',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	borderRadius: '0 0 20% 20%',
	marginBottom: '100px',
	zIndex: 3,
	background:
		'linear-gradient(25deg, rgba(34,145,195,0.8270483193277311) 0%, rgba(251,92,48,0.6962359943977591) 97%, rgba(149,45,253,0.3477766106442577) 100%)',

	'&:hover': {
		boxShadow: '0 0 3px #fff, 0 0 5px #fff, 0 0 7px #0ff',
	},

	[theme.breakpoints.down('md')]: {
		height: '200px',
		borderRadius: '0 0 10% 10%',
		marginBottom: '50px',
	},
}));

const StyledTitleContainer = styled(Stack)(({ theme }) => ({
	flexDirection: 'row',
	justifyContent: 'center',
	gap: '48px',
	fontSize: '4rem',

	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		alignItems: 'center',
		padding: '20px 0',
		fontSize: '2rem',
	},

	[theme.breakpoints.between('sm', 'md')]: {
		flexDirection: 'column',
		alignItems: 'center',
		padding: '20px 0',
		fontSize: '2rem',
	},

	[theme.breakpoints.between('md', 'lg')]: {
		fontSize: '3rem',
	},

	[theme.breakpoints.up('lg')]: {
		fontSize: '4rem',
	},
}));

const StyledText = styled(Typography)(({ theme }) => ({
	fontSize: 'inherit',
	width: 'fit-content',
}));

export const Hero = () => {
	return (
		<StyledHeroContainer>
			<StyledTitleContainer>
				<StyledText
					variant="h1"
					sx={{
						fontWeight: 'bold',
					}}
				>
					Irad Doron
				</StyledText>
				<StyledText variant="h1">Full Stack Developer</StyledText>
			</StyledTitleContainer>
		</StyledHeroContainer>
	);
};
