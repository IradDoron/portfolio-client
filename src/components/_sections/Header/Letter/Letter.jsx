import { useContext, useState } from 'react';
import { animated, useSpring, useTransition } from 'react-spring';
import styled from 'styled-components';
import ThemeContext from '../../../../theme/ThemeContext';

const StyledLetter = styled.h1`
	font-size: ${(props) => props.theme.typography.size.h1};
	margin-right: 20px;
	@media (max-width: ${(props) => props.theme.breakpoints.xl}) {
		font-size: ${(props) => props.theme.typography.size.h2};
	}
	@media (max-width: ${(props) => props.theme.breakpoints.lg}) {
		font-size: ${(props) => props.theme.typography.size.h3};
	}
	@media (max-width: ${(props) => props.theme.breakpoints.sm}) {
		font-size: ${(props) => props.theme.typography.size.h4};
	}
`;

function Letter({ children, letterTimeOut }) {
	const [isCancel, setIsCancel] = useState(true);
	const { theme } = useContext(ThemeContext);
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
						theme={theme}
					>
						<animated.div style={leaveSpring}>{children}</animated.div>
					</StyledLetter>
				) : null
			)}
		</>
	);
}

export default Letter;
