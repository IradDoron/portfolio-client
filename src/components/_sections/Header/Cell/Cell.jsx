import styled from 'styled-components';

import { useState } from 'react';

const cellSize = 30;

const StyledCell = styled.div`
	height: ${cellSize}px;
	width: ${cellSize}px;
	background-color: ${(props) => props.color};
	/* border: solid salmon; */
`;

function Cell({ setCurrRedValue, currRedValue }) {
	const [color, setColor] = useState('#141414');

	function getCellColorByTime() {
		const time = new Date();
		const milliSecond = time.getMilliseconds();

		const inRangeValue = milliSecond % 255;
		const r = inRangeValue;
		const g = 40;
		const b = 140;

		return `rgb(${r}, ${g}, ${b})`;
	}

	function getCellColorByState(currRedValue) {
		const r = currRedValue;
		const g = 40;
		const b = 140;

		return `rgb(${r}, ${g}, ${b})`;
	}

	function handleMouseEnter() {
		if (currRedValue <= 255) {
			setCurrRedValue((currRedValue = currRedValue + 2));
		} else {
			setCurrRedValue((currRedValue = 0));
		}

		setColor(getCellColorByTime());
	}

	function handleMouseLeave() {
		setTimeout(() => setColor('#141414'), 200);
	}
	return (
		<StyledCell
			color={color}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		/>
	);
}

export default Cell;
