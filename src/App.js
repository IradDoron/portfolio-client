import About from './components/_sections/About/About';
import Projects from './components/_sections/Projects/Projects';

import theme from './theme/theme1';
import ThemeContext from './theme/ThemeContext';



function App() {
	return (
		<ThemeContext.Provider value={{ theme }}>
			<About />
			<Projects />
		</ThemeContext.Provider>
	);
}

export default App;
