import { Project } from 'types';

export const projects: Project[] = [
	{
		projectTitle: 'Esum Acisum',
		githubLink: 'https://github.com/IradDoron/esum-acisum-client-v2',
		liveLink: 'https://main--loquacious-zuccutto-671d0a.netlify.app/',
		description: [
			'A website for learning playing the piano',
			'I used React, Node.js, Express, TypeScript, an independent API I created, and the libraries Recoil (for state management), Styled Components (for styling) and ABCjs (for musical graphics).',
		],
	},
	{
		projectTitle: 'Find Da Note',
		githubLink: 'https://github.com/IradDoron/find-da-note',
		liveLink: 'https://main--effortless-licorice-e5157b.netlify.app/',
		description: [
			'A game where you have to find the right note according to given note, interval and direction.',
			'The game is written in React and uses the context and reducer hooks API for manage the logic and data.',
		],
	},
	{
		projectTitle: 'Battleship Real-time',
		githubLink: 'https://github.com/IradDoron/battleship-client',
		liveLink: 'https://battleship-irad.netlify.app/',
		description: [
			'I wrote a game similar to the classic battleship game, but with a real-time multiplayer.',
			'The game is written in React and uses Node.js and Socket.io for the server.',
		],
	},
];
