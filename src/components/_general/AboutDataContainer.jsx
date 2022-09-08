import styled from 'styled-components';

const ScAboutDataContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-bottom-color: ${(props) => props.underlineColor};
	border-bottom-width: 4px;
	border-bottom-style: solid;
	margin: 6px;
	margin-bottom: 16px;
`;

function AboutDataContainer({ color, children }) {
	return (
		<ScAboutDataContainer underlineColor={color}>
			{children}
		</ScAboutDataContainer>
	);
}

export default AboutDataContainer;
