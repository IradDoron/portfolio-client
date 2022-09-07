import Para from '../Utils/Para/Para';
import Title from '../Utils/Title/Title';
import Accordion from '../Utils/Accordion/Accordion';

import styled from 'styled-components';

const StyledSection = styled.section``;

function About() {
	return (
		<>
			<StyledSection>
				<Title>What I am looking for?</Title>
				<Accordion>
					<Para>
						I'm looking for my first position as a Fullstak developer.
					</Para>
				</Accordion>
			</StyledSection>
		</>
	);
}

export default About;
