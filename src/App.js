import About from './components/_sections/About/About';
import Header from './components/_sections/Header/Header';
import Projects from './components/_sections/Projects/Projects';

import theme from './theme/theme1';
import ThemeContext from './theme/ThemeContext';

import styled from 'styled-components';

const ScBodyWrapper = styled.div`
	background-color: #fff;
	border: solid red;
	position: relative;
`;

function App() {
	return (
		<ThemeContext.Provider value={{ theme }}>
			<Header />
			<ScBodyWrapper>
				<About />
				<Projects />
			</ScBodyWrapper>
		</ThemeContext.Provider>
	);
}

export default App;
