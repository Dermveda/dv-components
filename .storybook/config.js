import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import backgrounds from "@storybook/addon-backgrounds";
import infoAddon, { setDefaults } from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';
import { LearnSkinTheme } from 'theme';

const req = require.context('../src', true, /\.stories\.js$/);

// Configure withInfo addon
setDefaults({
    inline: true
});
setAddon(infoAddon);

// Configure storybook react router
// addDecorator(StoryRouter());

// Configure theme provider
addDecorator(storyfn => (
	<LearnSkinTheme>
		{storyfn()}
	</LearnSkinTheme>
));

// Configure background options
addDecorator(backgrounds([
	{ name: 'Light Grey', value: '#f7f7f7' },
    { name: 'Blue Gradient', value: 'linear-gradient(to bottom right, #2193B0, #6DD5ED' },
	{ name: 'Green Gradient', value: 'linear-gradient(to bottom right, #72AFD3, #37ECBA)'}
]));

const loadStories = () => req.keys().forEach(f => req(f));

configure(loadStories, module);
