import { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../theme/ThemeContext';

const ScProjectDescription = styled.p`
	margin: 24px 0;
	font-family: ${(props) => props.fontFamily};
	font-weight: normal;
`;

function ProjectDescription({ children }) {
	const { theme } = useContext(ThemeContext);

	// children is the array of sentences
	return (
		<>
			{children.map((p, index) => {
				return (
					<ScProjectDescription
						key={index}
						fontSize={theme.typography.size.body}
						fontFamily={theme.fontFamily.secondary}
					>
						{p}
					</ScProjectDescription>
				);
			})}
		</>
	);
}

export default ProjectDescription;
