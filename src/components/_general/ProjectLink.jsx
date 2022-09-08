import { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../theme/ThemeContext';

const ScProjectLink = styled.div`
	color: ${(props) => props.color};
	font-family: ${(props) => props.fontFamily};
`;

const ScLabel = styled.h3`
	color: ${(props) => props.color};
	font-family: ${(props) => props.fontFamily};
	font-weight: normal;
`;

const ScProjectLinkContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	&:hover {
		background-color: ${(props) => props.hover};
	}
	cursor: pointer;
	padding: 6px;
	border-radius: 40px;
`;

function ProjectLink({ href, linkType }) {
	const { theme } = useContext(ThemeContext);
	const color = theme.colors.blue;
	const isGithub = linkType === 'github';
	const label = isGithub ? 'See project on GitHub:' : 'See project live:';

	function handleClick() {
		window.open(href);
	}
	return (
		<ScProjectLinkContainer
			onClick={handleClick}
			hover={theme.colors.lightPurple}
		>
			<ScLabel fontFamily={theme.fontFamily.secondary} color={color}>
				{label}
			</ScLabel>
			<ScProjectLink
				color={color}
				fontSize={theme.typography.size.body}
				fontFamily={theme.fontFamily.secondary}
			>
				{href}
			</ScProjectLink>
		</ScProjectLinkContainer>
	);
}

export default ProjectLink;
