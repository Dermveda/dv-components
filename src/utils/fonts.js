import { responsiveStyle } from 'styled-system';

export const fontSize = responsiveStyle({
	prop: 'fontSize',
	cssProperty: 'font-size',
	getter: x => `${x}rem`,
	key: 'fontSizes'
});

export const systemFonts =
	'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
