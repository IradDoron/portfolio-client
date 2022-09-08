import { useState } from 'react';
import { animated, useSpring, useTransition } from 'react-spring';
import styled from 'styled-components';

const StyledLetter = styled.h1`
	font-size: 4rem;
	margin-right: 20px;
`;

function Letter({ children, letterTimeOut }) {
	const [isCancel, setIsCancel] = useState(true);
	// useState with the array syntax
	const currSpring = useState(
		useSpring({
			from: { y: -400 },
			to: { y: 0 },
			cancel: isCancel,
		})
	)[0];

	const [isLeaving, setIsLeaving] = useState(true);
	// useState with the array syntax
	const isSlideOff = useState(false)[0];

	const transition = useTransition(isSlideOff, {
		from: { y: 0 },
		enter: { y: 0 },
		leave: { y: -500 },
		config: { duration: 100 },
	});

	const leaveSpring = useSpring({
		to: { y: -100 },
		from: { y: 0 },
		cancel: isLeaving,
	});

	setTimeout(() => setIsCancel(false), letterTimeOut);

	function handleClick() {
		setIsLeaving(true);
	}
	return (
		<>
			{transition((style, item) =>
				!item ? (
					<StyledLetter
						as={animated.div}
						style={currSpring}
						onClick={handleClick}
					>
						<animated.div style={leaveSpring}>{children}</animated.div>
					</StyledLetter>
				) : null
			)}
		</>
	);
}

export default Letter;
