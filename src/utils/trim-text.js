const trimWordWise = value => {
	const lastspace = value.lastIndexOf(' ');
	if (lastspace !== -1)  {
		const isPreviousCharacterPunctuation = Boolean(
			value.charAt(lastspace - 1) === '.' ||
			value.charAt(lastspace - 1) === ','
		);

		return isPreviousCharacterPunctuation ?
			value.substr(0, lastspace - 1) :
			value.substr(0, lastspace);
	}

	return value;
};

/**
 * @param  {String} value     Long text to be trimmed
 * @param  {Boolean} wordwise Boolean that determines if the strings should be cut prematurely
 * @param  {Number} max       Max length of long text
 * @param  {String} [tail=' …'] Tail that will be appended to trimmed text.
 * @return {String}          Trimmed text with tail (if text exceeds max)
 */
const trimText = (value, wordwise, max, tail = ' …') => {
	if (!value) return '';
	if (!max) return value;
	if (value.length <= max) return value;

	let trimmedString = value
		.trim()
		.substr(0, max);

	if (wordwise) trimmedString = trimWordWise(trimmedString);

	return `${trimmedString}${tail}`;
};

export default trimText;
