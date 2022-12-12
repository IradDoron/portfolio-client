import { Stack } from '@mui/material';

import './App.css';

import { About, Hero, Projects } from 'sections';

export const App = () => {
	return (
		<Stack
			alignItems="center"
			sx={{
				background: 'linear-gradient(25deg, #1c0b48d0 0%, #051d1ac4 100%)',
			}}
		>
			<div
				className="bg-animation"
				style={{
					zIndex: 2,
				}}
			>
				<div id="stars"></div>
				<div id="stars2"></div>
				<div id="stars3"></div>
				<div id="stars4"></div>
			</div>
			<Hero />
			<Projects />
			<About />
		</Stack>
	);
};
