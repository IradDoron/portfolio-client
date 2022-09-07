import Header from './components/Header/Header';
import About from './components/About/About';
import Works from './components/Works/Works';

import styled from 'styled-components';

const StyledBodyLayout = styled.main`
	padding: 10px 30px 0 30px;
	border-radius: 30% 30% 0 0;
	z-index: 1000;
	background-color: #fff;
`;

const StyledApp = styled.div`
	background-color: #141414;
`;

function App() {
	return (
		<StyledApp>
			<Header />
			<StyledBodyLayout>
				<About />
				<Works />
			</StyledBodyLayout>
		</StyledApp>
	);
}

export default App;
