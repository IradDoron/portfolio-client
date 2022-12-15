import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledParagraph = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		fontSize: '0.8rem',
	},

	[theme.breakpoints.between('sm', 'md')]: {
		fontSize: '1rem',
	},

	[theme.breakpoints.up('md')]: {
		fontSize: '1.2rem',
	},
}));

type Props = {
	children: React.ReactNode;
	color?: string;
	sx?: any;
};

export const Paragraph = ({
	children,
	sx,
	color = 'text.secondary',
}: Props) => {
	return (
		<StyledParagraph variant="body2" color={color} sx={{ ...sx }}>
			{children}
		</StyledParagraph>
	);
};

export default Paragraph;
