export const getRegularCaseFromCamelCase = (camelCase: string) => {
	const firstLetter = camelCase.charAt(0).toUpperCase();

	const restOfTheString = camelCase.slice(1);

	const regularCase =
		firstLetter + restOfTheString.replace(/([A-Z])/g, ' $1').trim();

	return regularCase;
};
