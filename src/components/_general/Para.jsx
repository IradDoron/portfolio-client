import styled from 'styled-components';

const StyledPara = styled.p`
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
		'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	font-size: 1.3rem;
`;

function Para({ children }) {
	return <StyledPara>{children}</StyledPara>;
}

export default Para;
