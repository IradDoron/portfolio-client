import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MyCard = styled(Card)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	opacity: 0.8,

	[theme.breakpoints.down('sm')]: {
		width: '100%',
		height: 'fit-content',
	},

	'&:hover': {
		boxShadow: '0 0 3px #fff, 0 0 5px #fff, 0 0 7px #0ff',
	},
}));
