import { About } from 'types/AboutTypes';

export const about: About = {
	generalInfo: {
		title: 'General Info',
		details: {
			name: 'Irad Doron',
			position: `I'm a junior developer and looking for my first position as full stack developer`,
			city: 'Rosh Haayin',
			phone: '054-461-6288',
			email: 'irad.doron@gmail.com',
			githubLink: 'https://github.com/IradDoron',
			linkedinLink: 'https://www.linkedin.com/in/irad-doron-3aa219128',
		},
	},
	education: [
		{
			title: 'Full stack course in Netcrat Academy',
			date: '1/12/2021 - 24/7/2022',
		},
		{
			title: 'Full Matriculation Certificates in Begin High School',
			date: '1/9/2013 - 14/7/2014',
		},
	],
	militaryService: {
		title: 'Fighter in the IDF Artillery Corps',
		date: '28/7/2014 - 28/7/2017',
	},
	skills: [
		{
			title: 'Coding skills',
			items: [
				'JavaScript',
				'React',
				'Node.JS',
				'HTML',
				'CSS',
				'Git',
				'MongoDB',
			],
		},
		{
			title: 'Favorite libraries',
			items: [
				'Styled Components',
				'React Router',
				'Socket.IO',
				'Express',
				'Material UI',
			],
		},
		{
			title: 'Languages',
			items: ['Hebrew - Native', 'English - Fluent'],
		},
	],
	moreAboutMe: {
		title: 'More about me',
		hobbies: [
			`Create music with digital audio workstation, and also play the piano and write music for piano`,
			`Read books about self-development and personal growth`,
			`I like to watch anime series about adventure`,
		],
	},
};
