import { oneLineTrim } from 'common-tags';

const objectToString = separator => object =>
	Object
		.keys(object)
		.reduce((acc, curr) => {
			acc.push([`${curr}_${object[curr]}`]);
			return acc;
		}, [])
		.join(separator);

const modifyCloudinary = (url, options) => {
	const keys = Object.keys(options);
	const optionsBegin = url.indexOf('image/upload/') + 13;
	const optionsEnd = url.indexOf('/', optionsBegin);
	const cloudOptions = url
		.slice(optionsBegin, optionsEnd)
		.split(',')
		.reduce((acc, curr) => {
			const [key, val] = curr.split('_');
			return Object.assign({}, acc, { [key]: val });
		}, {});

	keys.forEach((key) => { cloudOptions[key] = options[key]; });
	return oneLineTrim`
		${url.slice(0, optionsBegin)}
		${objectToString(',')(cloudOptions)}
		${url.slice(optionsEnd)}
	`;
};

export default modifyCloudinary;
