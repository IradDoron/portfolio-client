import styled from 'styled-components';

import { useContext } from 'react';

import ThemeContext from '../../theme/ThemeContext';

const ScSectionSubHeader = styled.h2`
	font-family: ${(props) => props.fontFamily};
	color: ${(props) => props.color};
	font-weight: bold;
	font-size: ${(props) => props.fontSize};
	text-align: center;
	margin: 8px;
`;

function SectionSubHeader({ color, children }) {
	const { theme } = useContext(ThemeContext);
	return (
		<ScSectionSubHeader
			fontFamily={theme.fontFamily.primary}
			color={color}
			fontSize={theme.typography.size.h2}
		>
			{children}
		</ScSectionSubHeader>
	);
}

export default SectionSubHeader;
