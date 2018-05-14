import 'static/icons.svg';

export const icons = {
	heart: {
		glyph: 'heart-2-2',
		outline: 'heart-2-3',
		colored: 'heart-2-4'
	},
	rightArrow: {
		glyph: 'tail-right-3',
		outline: 'tail-right-2',
		colored: 'tail-right-1'
	}
};

const IconMapper = (name, style = 'glyph') => `#nc-${icons[name][style]}`;

export default IconMapper;
