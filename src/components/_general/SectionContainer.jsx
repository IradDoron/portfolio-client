import { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../theme/ThemeContext';

const ScSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: ${(props) => props.m};
	border-width: 8px;
	border-style: solid;
	 border-radius: 40px;
	border-color: ${(props) => props.color}; 
	max-width: 800px;
	margin: auto;
	margin-top: 48px;
	
`;

function SectionContainer({ color, children }) {
	const { theme } = useContext(ThemeContext);
	return (
		<ScSectionContainer color={color} m={theme.spacing.lg}>{children}</ScSectionContainer>
	);
}

export default SectionContainer;
