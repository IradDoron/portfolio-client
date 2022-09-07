import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';

const StyledAccordionHead = styled.button``;
const StyledAccordionBody = styled.div`
	border: solid red;
	overflow: hidden;
    
`;

function Accordion({ children }) {
	const [isOpen, setIsOpen] = useState(false);

	const transition = useTransition(isOpen, {
		from: { height: 0 },
		enter: { height: 100 },
		leave: { height: 0 },
	});
	function handleClick() {
		setIsOpen(!isOpen);
	}
	return (
		<>
			<StyledAccordionHead onClick={handleClick}>CLICK</StyledAccordionHead>
			{transition((style, isOpen) =>
				isOpen ? (
					<StyledAccordionBody style={style} as={animated.div}>
						{children}
					</StyledAccordionBody>
				) : null
			)}
		</>
	);
}

export default Accordion;
