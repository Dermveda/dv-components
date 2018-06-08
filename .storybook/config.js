import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import backgrounds from "@storybook/addon-backgrounds";
import infoAddon, { setDefaults } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import StoryRouter from 'storybook-react-router';
import { checkA11y } from 'storybook-addon-a11y';
import { LearnSkinTheme, DermvedaTheme } from 'theme';
import '../src/global.styles';
import '../src/static/icons.svg';

const req = require.context('../src', true, /\.stories\.js$/);

// Configure withInfo addon
setDefaults({
    inline: true
});
setAddon(infoAddon);

// Configure React router
addDecorator(StoryRouter());
addDecorator(checkA11y);

// Configure theme provider
addDecorator(withKnobs);
const ThemeSwitcher = ({ theme, storyfn }) => theme === 'learnskin' ? (
	<LearnSkinTheme>{storyfn()}</LearnSkinTheme>
) : (
	<DermvedaTheme>{storyfn()}</DermvedaTheme>
);

addDecorator(storyfn => (
	<ThemeSwitcher
		theme={select('theme', ['learnskin', 'dermveda'], 'dermveda', 'theme-provider')}
		storyfn={storyfn}
	/>
));

// Configure background options
addDecorator(backgrounds([
	{ name: 'Light Grey', value: '#f7f7f7' },
    { name: 'Blue Gradient', value: 'linear-gradient(to bottom right, #2193B0, #6DD5ED' },
	{ name: 'Green Gradient', value: 'linear-gradient(to bottom right, #72AFD3, #37ECBA)'}
]));

const loadStories = () => req.keys().forEach(f => req(f));

configure(loadStories, module);
