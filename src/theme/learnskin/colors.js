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
	main: '#668CFF',
	secondary: '#ffffff',
	tertiary: '#45B9E1'
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

const gradientInverse = {
	primary: `linear-gradient(to top, ${primary.main}, ${primary.tertiary})`,
	bold: `linear-gradient(to top, ${bold.main}, ${bold.tertiary})`,
	secondary: `linear-gradient(to top, ${secondary.main}, ${secondary.tertiary})`,
	tertiary: `linear-gradient(to top, ${tertiary.main}, ${tertiary.tertiary})`
};

const colors = {
	primary,
	secondary,
	tertiary,
	bold,
	gradient,
	gray,
	gradientInverse
};

export default colors;
