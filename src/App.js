import About from './components/_sections/About/About';
import Header from './components/_sections/Header/Header';
import Projects from './components/_sections/Projects/Projects';

import theme from './theme/theme1';
import ThemeContext from './theme/ThemeContext';

import styled, { keyframes } from 'styled-components';

const ScBodyWrapper = styled.div`
	background-color: #fff;
	border: solid #fff;
	position: relative;
`;

const ScBlinkingAnimation = keyframes`
	0% {
		opacity: 0;
	}
	50% {
		opacity: 0.7;
	}
	100% {
		opacity: 0;
	}
`;

const ScScrollDown = styled.div`
	position: absolute;
	color: #fff;
	top: -100px;
	left: 50%;
	transform: translateX(-50%);
	font-family: ${(props) => props.theme.fontFamily.primary};
	font-size: ${(props) => props.theme.typography.size.h2};
	animation-name: ${ScBlinkingAnimation};
	animation-duration: 1.5s;
	animation-iteration-count: infinite;
`;

function App() {
	return (
		<ThemeContext.Provider value={{ theme }}>
			<Header />
			<ScBodyWrapper>
				<ScScrollDown
					theme={theme}
				>
					Scroll Down
				</ScScrollDown>
				<About />
				<Projects />
			</ScBodyWrapper>
		</ThemeContext.Provider>
	);
}

export default App;
