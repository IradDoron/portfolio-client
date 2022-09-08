import AboutDataContainer from './AboutDataContainer';
import AboutDataKey from './AboutDataKey';
import AboutDataValue from './AboutDataValue';

function AboutDataBlock({ field, content, type, color }) {
	return (
		<AboutDataContainer color={color}>
			<AboutDataKey>{field}:</AboutDataKey>
			<AboutDataValue type={type} content={content}>{content}</AboutDataValue>
		</AboutDataContainer>
	);
}

export default AboutDataBlock;
