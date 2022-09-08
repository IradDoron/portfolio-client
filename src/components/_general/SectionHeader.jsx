import styled from 'styled-components';

import { useContext } from 'react';

import ThemeContext from '../../theme/ThemeContext';

const ScSectionHeader = styled.h1`
	font-family: ${(props) => props.fontFamily.primary};
	color: ${(props) => props.color};
	font-size: ${(props) => props.fontSize};
	text-align: center;
`;

function SectionHeader({ color, children }) {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<ScSectionHeader
				fontFamily={theme.fontFamily.primary}
				color={color}
				fontSize={theme.typography.size.h1}
			>
				{children}
			</ScSectionHeader>
		</>
	);
}

export default SectionHeader;
