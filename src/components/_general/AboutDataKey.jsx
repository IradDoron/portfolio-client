import { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../theme/ThemeContext';

const ScAboutDataKey = styled.h3`
	font-family: ${(props) => props.fontFamily};
	font-size: ${(props) => props.fontSize};
	color: ${(props) => props.color};
	font-weight: normal;
`;

function AboutDataKey({ children }) {
	const { theme } = useContext(ThemeContext);

	return (
		<ScAboutDataKey
			fontFamily={theme.fontFamily.secondary}
			fontSize={theme.typography.size.h4}
			color={theme.colors.onBg}
		>
			{children}
		</ScAboutDataKey>
	);
}

export default AboutDataKey;
