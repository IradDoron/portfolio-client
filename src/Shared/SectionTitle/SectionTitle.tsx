import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTitle = styled(Typography)(({ theme }) => ({
	textShadow: '0 0 3px #fff, 0 0 5px #fff, 0 0 7px #0ff',
	fontWeight: 'bold',
	fontSize: '5rem',
	width: 'fit-content',
	margin: 'auto',
	marginTop: '68px',

	[theme.breakpoints.down('sm')]: {
		fontSize: '3rem',
	},

	[theme.breakpoints.between('sm', 'md')]: {
		fontSize: '4rem',
	},
}));

export const SectionTitle = ({ title }: { title: string }) => {
	return <StyledTitle variant="h2">{title}</StyledTitle>;
};
