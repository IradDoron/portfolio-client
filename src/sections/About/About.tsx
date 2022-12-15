import { Chip, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import { about } from 'resources';

import { GeneralInfo as GeneralInfoType } from 'types/AboutTypes';

import { getRegularCaseFromCamelCase } from 'helpers';

import { MyCard, Paragraph, SectionTitle } from 'Shared';

const StyledAboutCard = styled(MyCard)(({ theme }) => ({
	width: '700px',
	padding: '20px',
}));

const StyledAboutTitle = styled(Typography)(({ theme }) => ({
	fontSize: '2rem',
	fontWeight: 'bold',
	marginBottom: '20px',
	textAlign: 'center',

	[theme.breakpoints.down('sm')]: {
		fontSize: '1.5rem',
	},
}));

const StyledAboutInfoRow = styled(Stack)(({ theme }) => ({
	flexDirection: 'row',
	justifyContent: 'flex-start',
	alignItems: 'center',
	margin: '0px',
	gap: '30px',

	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '10px',
		textAlign: 'center',
	},
}));

const StledChip = styled(Chip)(({ theme }) => ({
	fontSize: '1.1rem',
	color: grey[700],
	backgroundColor: grey[200],
	minWidth: '140px',
	margin: '0px',

	[theme.breakpoints.down('sm')]: {
		fontSize: '0.7rem',
	},
}));

type GeneralInfoProps = {
	data: GeneralInfoType;
};

export const GeneralInfo = ({ data }: GeneralInfoProps) => {
	const { details, title } = data;
	const list = Object.entries(details);
	return (
		<StyledAboutCard>
			<StyledAboutTitle>{title}</StyledAboutTitle>
			<Stack spacing={4}>
				{list.map((item) => {
					const [key, value] = item;
					return (
						<StyledAboutInfoRow
							key={key}
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<StledChip
								label={getRegularCaseFromCamelCase(key)}
								variant="outlined"
							/>
							<Paragraph>{value}</Paragraph>
						</StyledAboutInfoRow>
					);
				})}
			</Stack>
		</StyledAboutCard>
	);
};

export const Education = ({ data }: { data: any }) => {
	return (
		<StyledAboutCard>
			<StyledAboutTitle>Education</StyledAboutTitle>
			<Stack spacing={4}>
				{data.map((item: any) => {
					const { title, date } = item;
					return (
						<StyledAboutInfoRow key={title}>
							<StledChip
								label={getRegularCaseFromCamelCase(title)}
								variant="outlined"
							/>
							<Paragraph>{date}</Paragraph>
						</StyledAboutInfoRow>
					);
				})}
			</Stack>
		</StyledAboutCard>
	);
};

export const Skills = ({ data }: { data: any }) => {
	return (
		<StyledAboutCard>
			<StyledAboutTitle>Skills</StyledAboutTitle>
			<Stack spacing={4}>
				{data.map((item: any) => {
					const { title, items } = item;
					return (
						<Stack key={title} spacing={2}>
							<Typography variant="h5">{title}</Typography>

							<Stack
								direction="row"
								sx={{
									flexWrap: 'wrap',
								}}
							>
								{items.map((item: any) => {
									return (
										<StledChip
											key={item}
											label={item}
											variant="outlined"
											sx={{
												width: 'fit-content',
												minWidth: '0px',
												margin: '5px',
											}}
										/>
									);
								})}
							</Stack>
						</Stack>
					);
				})}
			</Stack>
		</StyledAboutCard>
	);
};

export const MilitaryService = ({ data }: { data: any }) => {
	const { title, date } = data;
	return (
		<StyledAboutCard>
			<StyledAboutTitle>Military Service</StyledAboutTitle>
			<Stack spacing={4}>
				<StyledAboutInfoRow>
					<StledChip label={title} variant="outlined" />
					<Paragraph>{date}</Paragraph>
				</StyledAboutInfoRow>
			</Stack>
		</StyledAboutCard>
	);
};

export const About = () => {
	const { generalInfo, education, skills, militaryService } = about;
	return (
		<Stack
			spacing={6}
			sx={{
				width: '100%',
				padding: '20px',
				alignItems: 'center',
				justifyContent: 'center',
				zIndex: 3,
			}}
		>
			<SectionTitle title="About" />
			<GeneralInfo data={generalInfo} />
			<Education data={education} />
			<Skills data={skills} />
			<MilitaryService data={militaryService} />
		</Stack>
	);
};
