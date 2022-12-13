import { Project } from 'types';

export const projects: Project[] = [
	{
		projectTitle: 'Find Da Note',
		githubLink: 'https://github.com/IradDoron/find-da-note',
		liveLink: 'https://find-da-note.netlify.app/',
		description: [
			'A game where you have to find the right note according to given note, interval and direction',
			'The game is written in React and uses the context and reducer hooks API for manage the logic and data',
		],
	},
	{
		projectTitle: 'Musical Road',
		liveLink: 'https://musicalroad.netlify.app/',
		description: [
			'Musical Road is a learning platform for music',
			'At the moment you can find here notations for piano pieces and songs',
			'I wrote this project with React and TypeScript',
			'For the state management I used Recoil, and for the styling Material UI and Styled Components',
		],
	},
	{
		projectTitle: 'Elbit Form',
		githubLink: 'https://github.com/pelegsch666/elbit-form',
		liveLink: 'https://data-base-boards-elbit.netlify.app/',
		description: [
			`Peleg and I wrote this project for Peleg's uncle`,
			'His uncle works at Elbit and he needed an interface for edit and display data',
			'We used React, Recoil, Material UI, React Table',
			'The users can add data to a table, and edit or delete data from there',
			'The data is saved in the local storage of the browser',
		],
	},
	{
		projectTitle: 'Shred It Up',
		githubLink: 'https://github.com/pelegsch666/tempo-organizer',
		liveLink: 'https://shred-it-up.netlify.app/',
		description: [
			`My developer friend Peleg and I created this project to help musical players manage technique practice`,
			'The user can fill a form and add an exercise to a table',
			'All the exercises can be edited, and they are stored in the local storage',
			'We also included a timer to set some time for the practice session, and a metronome',
			'We used React, Styled Components, React Table and Tone.js',
		],
	},
	{
		projectTitle: 'CSS Playground',
		githubLink: 'https://github.com/pelegsch666/css-playground-client',
		liveLink: 'https://css-playground-peleg-irad.netlify.app/',
		description: [
			`CSS Playground is a game that Peleg and I wrote for practice CSS`,
			'The idea is to affect the CSS properties of the user shape until it looks like the target shape',
			'We used React, React Router, Recoil, Styled Components',
		],
	},
];
