import styled from 'styled-components';
import { animated, useSpring, useTransition } from 'react-spring';
import { useState } from 'react';

const StyledLetter = styled.h1`
	font-size: 4rem;
	margin-right: 20px;
`;

function Letter({ children, letterTimeOut }) {
	const [isCancel, setIsCancel] = useState(true);
	const [currSpring, setCurrSpring] = useState(
		useSpring({
			from: { y: -400 },
			to: { y: 0 },
			cancel: isCancel,
		})
	);

	const [isLeaving, setIsLeaving] = useState(true);
	const [isSlideOff, setIsSlideOff] = useState(false);

	const leaveStyle = useSpring({
		from: { y: 0 },
		to: { y: -500 },
	});

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
