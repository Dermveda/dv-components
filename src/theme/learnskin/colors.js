const primary = {
	main: '#45C4E5',
	secondary: '#ffffff',
	tertiary: '#47A3D9'
};

const secondary = {
	main: '#F7F7F7',
	secondary: '#2B2B2B',
	tertiary: '#717171'
};

const tertiary = {
	main: '#7E51D5',
	secondary: '#ffffff',
	tertiary: '#6B3BC7'
};

const bold = {
	main: '#F09819',
	secondary: '#ffffff',
	tertiary: '#F07218'
};

const gradient = {
	primary: [primary.main, primary.tertiary],
	bold: [bold.main, bold.tertiary],
	secondary: [secondary.main, secondary.tertiary],
	tertiary: [tertiary.main, tertiary.tertiary]
};

const gray = {
	light: '#f7f7f7',
	medium: '#717171',
	dark: '#2b2b2b'
};

const status = {
	success: '#249f58',
	error: '#e74c3c'
};

const progressive = {
	success: {
		dark: '#4F8A10',
		light: '#DFF2BF'
	},
	warning: {
		dark: '#9F6000',
		light: '#FEEFB3'
	},
	error: {
		dark: '#D8000C',
		light: '#FFBABA'
	},
	info: {
		dark: '#00529B',
		light: '#BDE5F8'
	}
};

const gradientInverse = {
	primary: `linear-gradient(to top, ${primary.main}, ${primary.tertiary})`,
	bold: `linear-gradient(to top, ${bold.main}, ${bold.tertiary})`,
	secondary: `linear-gradient(to top, ${secondary.main}, ${secondary.tertiary})`,
	tertiary: `linear-gradient(to top, ${tertiary.main}, ${tertiary.tertiary})`
};

const colors = {
	status,
	primary,
	secondary,
	tertiary,
	bold,
	gradient,
	gray,
	gradientInverse,
	progressive
};

export default colors;
