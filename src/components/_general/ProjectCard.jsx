import { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../theme/ThemeContext';

const ScProjectCard = styled.div`
	background-color: ${(props) => props.bgColor};
	padding: 24px;
	border-radius: 8px;
	border-width: 2px;
	border-style: solid;
	border-color: ${(props) => props.color};
    max-width: 700px;
    width: 100%;
    margin: 24px 0;
    box-shadow: 6px 12px 18px rgba(84, 41, 140, 0.15);
`;

function ProjectCard({ children }) {
	const { theme } = useContext(ThemeContext);
	const color = theme.colors.blue;
	const bgColor = theme.colors.lightBlue;

	return <ScProjectCard bgColor={bgColor} color={color}>{children}</ScProjectCard>;
}

export default ProjectCard;
