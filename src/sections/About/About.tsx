import { Card, Chip, Stack, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

import { grey } from '@mui/material/colors';

import { about } from 'resources';

import { GeneralInfo as GeneralInfoType } from 'types/AboutTypes';

import { getRegularCaseFromCamelCase } from 'helpers';

import { SectionTitle } from 'components/Shared/SectionTitle';

const StyledAboutCard = styled(Card)({
	width: '700px',
	padding: '20px',
});

const StyledAboutTitle = styled(Typography)({
	fontSize: '2rem',
	fontWeight: 'bold',
	marginBottom: '20px',
	textAlign: 'center',
});

const StyledAboutInfoRow = styled(Stack)({
	flexDirection: 'row',
	justifyContent: 'flex-start',
	alignItems: 'center',
	margin: '0px',
	gap: '30px',
});

const StledChip = styled(Chip)({
	fontSize: '1.1rem',
	color: grey[700],
	backgroundColor: grey[200],
	minWidth: '140px',
	margin: '0px',
});

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
							<Typography>{value}</Typography>
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
							<Typography>{date}</Typography>
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
					<Typography>{date}</Typography>
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
