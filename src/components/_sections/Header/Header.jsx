import { useState } from 'react';
import styled from 'styled-components';

import Cell from './Cell/Cell';
import Letter from './Letter/Letter';

const AMOUNT_CELLS = 1000;
const DELAY = 250;
const LINES_DALEY = 800;

const StyledTitleContainer = styled.h1`
	color: #e5c3c3;
	text-align: center;
	position: fixed;
	top: ${(props) => props.offset}px;
	left: 0;
	right: 0;
	cursor: default;
	display: flex;
	justify-content: center;

	background: linear-gradient(93.24deg, #fbe7f0 4.1%, #cea8ff 154%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;

	text-shadow: 6px 8px 9px rgba(246, 242, 255, 0.15);



`;

const StyledHeaderContainer = styled.section`
	height: 100vh;
	background-color: #141414;
	display: grid;
	grid-template-columns: repeat(40, auto);
	overflow: hidden;

`;

function Header() {
	const titleStr = 'Irad Doron';
	const titleArr = titleStr.split(' ');
	const subTitleStr = 'Fullstack Developer';
	const subTitleArr = subTitleStr.split(' ');

	const [currRedValue, setCurrRedValue] = useState(0);

	return (
		<>
			<StyledHeaderContainer>
				{new Array(AMOUNT_CELLS).fill(0).map((value, index) => {
					return (
						<Cell
							key={index}
							currRedValue={currRedValue}
							setCurrRedValue={setCurrRedValue}
						/>
					);
				})}
			</StyledHeaderContainer>
			<StyledTitleContainer offset={40}>
				{titleArr.map((value, index) => {
					return (
						<Letter key={index} letterTimeOut={index * DELAY}>
							{value}
						</Letter>
					);
				})}
			</StyledTitleContainer>
			<StyledTitleContainer offset={160}>
				{subTitleArr.map((value, index) => {
					return (
						<Letter
							key={index}
							letterTimeOut={(index + titleArr.length) * DELAY + LINES_DALEY}
						>
							{value}
						</Letter>
					);
				})}
			</StyledTitleContainer>
		</>
	);
}

export default Header;
