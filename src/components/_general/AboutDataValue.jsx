import { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../theme/ThemeContext';

const ScAboutDataValue = styled.p`
	font-family: ${(props) => props.fontFamily};
	font-size: ${(props) => props.fontSize};
	color: ${(props) => props.color};
	cursor: ${(props) => (props.isLink ? 'pointer' : 'default')};
	&:hover {
		background-color: ${(props) => (props.isLink ? props.hoverBg : '')};
	}
	padding: 6px;
	max-width: 470px;
`;

const ScAboutDataValueList = styled.ul``;

function AboutDataValue({ children, type, content }) {
	const { theme } = useContext(ThemeContext);

	const isLink = type === 'link';

	const isList = type === 'list';

	function handleClick() {
		if (isLink) {
			window.open(content);
		}
	}
	return isList ? (
		<ScAboutDataValueList>
			{children.map((item, index) => {
				return <li key={index}><ScAboutDataValue
				onClick={handleClick}
				fontFamily={theme.fontFamily.secondary}
				fontSize={theme.typography.size.body}
				color={theme.colors.onBg}
				hoverBg={theme.colors.lightPurple}
				isLink={isLink}
			>
				{item}
			</ScAboutDataValue></li>;
			})}
		</ScAboutDataValueList>
	) : (
		<ScAboutDataValue
			onClick={handleClick}
			fontFamily={theme.fontFamily.secondary}
			fontSize={theme.typography.size.body}
			color={theme.colors.onBg}
			hoverBg={theme.colors.lightPurple}
			isLink={isLink}
		>
			{children}
		</ScAboutDataValue>
	);
}

export default AboutDataValue;
