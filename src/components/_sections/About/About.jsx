import { useContext } from 'react';
import ThemeContext from '../../../theme/ThemeContext';
import AboutDataBlock from '../../_general/AboutDataBlock';
import SectionContainer from '../../_general/SectionContainer';
import SectionHeader from '../../_general/SectionHeader';
import SectionSubHeader from '../../_general/SectionSubHeader';
import SubSectionContainer from '../../_general/SubSectionContainer';

const aboutData = [
	{
		sectionTitle: 'General Info',
		sectionData: [
			{ type: 'text', field: 'Name', content: 'Irad Doron' },

			{ type: 'text', field: 'City', content: 'Rosh Haayin' },

			{ type: 'text', field: 'Phone', content: '054-461-6288' },

			{ type: 'text', field: 'Email', content: 'irad.doron@gmail.com' },

			{
				type: 'link',
				field: 'GitHub link',
				content: 'https://github.com/IradDoron',
			},

			{
				type: 'link',
				field: 'LinkedIn link',
				content: 'https://www.linkedin.com/in/irad-doron-3aa219128',
			},
		],
	},
	{
		sectionTitle: 'Education',
		sectionData: [
			{
				type: 'text',
				field: '1/12/2021 - 24/7/2022',
				content: 'Full stack course in Netcrat Academy',
			},
		],
	},
	{
		sectionTitle: 'Military Service',
		sectionData: [
			{
				type: 'text',
				field: '28/7/2014 - 28/7/2017',
				content: 'Fighter in the IDF Artillery Corps',
			},
		],
	},
	{
		sectionTitle: 'skills',
		sectionData: [
			{
				type: 'text',
				field: 'Coding skills',
				content: 'JavaScript, React, Node.JS',
			},
			{
				type: 'text',
				field: 'Languages',
				content: 'Hebrew (native language), English',
			},
		],
	},
];

function About() {
	const { theme } = useContext(ThemeContext);
	const color = theme.colors.purple;

	return (
		<>
			<SectionContainer color={color}>
				<SectionHeader color={color}>About</SectionHeader>

				{aboutData.map((section, index) => {
					return (
						<SubSectionContainer key={index}>
							<SectionSubHeader color={color}>
								{section.sectionTitle}
							</SectionSubHeader>
							{section.sectionData.map((rowData, index) => {
								const field = rowData.field;
                                const type = rowData.type;
                                const content = rowData.content;

								return (
									<AboutDataBlock
										key={field}
										field={field}
										content={content}
                                        type={type}
										color={color}
									/>
								);
							})}
						</SubSectionContainer>
					);
				})}
			</SectionContainer>
		</>
	);
}

export default About;
