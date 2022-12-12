export interface GeneralInfo {}

export interface Details {
	name: string;
	position: string;
	city: string;
	phone: string;
	email: string;
	githubLink: string;
	linkedinLink: string;
}

export interface GeneralInfo {
	title: string;
	details: Details;
}

export interface Activity {
	title: string;
	date: string;
}

export interface Skill {
	title: string;
	items: string[];
}

export interface About {
	generalInfo: GeneralInfo;
	education: Activity[];
	militaryService: Activity;
	skills: Skill[];
	moreAboutMe: {
		title: string;
		hobbies: string[];
	};
}
