import styled from 'styled-components';

import { useContext } from 'react';

import ThemeContext from '../../theme/ThemeContext';

const ScSubSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${(props) => props.py} 0;
	max-width: 700px;
	margin: 30px;
	width: 100%;
`;

function SubSectionContainer({ color, children }) {
	const { theme } = useContext(ThemeContext);
	return (
		<ScSubSectionContainer py={theme.spacing.l}>
			{children}
		</ScSubSectionContainer>
	);
}

export default SubSectionContainer;
