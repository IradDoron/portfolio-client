import styled from 'styled-components';

const StyledTitle = styled.h1`
	font-family: Georgia, 'Times New Roman', Times, serif;
	font-size: 3rem;
	text-align: center;
	margin-top: 60px;
	margin-bottom: 16px;
`;

function Title({ children }) {
	return <StyledTitle>{children}</StyledTitle>;
}

export default Title;
