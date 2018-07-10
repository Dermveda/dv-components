import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { text, select } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

// React documentation
import IconReadme from './docs/icon.md';
import IconCircleReadme from './docs/icon-circle.md';

import Icon from './icons';
import IconCircle from './icon-circle';
import { icons } from './icon-names';

storiesOf('Atoms/Icon', module)
	.add('with text', withReadme(IconReadme, () => (
		<Icon
			name={select('name', Object.keys(icons), 'rightArrow')}
			type={select('type', ['glyph', 'outline', 'colored'], 'glyph')}
			strokeSize={select('strokeSize', [1, 2, 3, 4], 2)}
			iconSize={select('iconSize', ['xs', 'sm', 'md', 'lg', 'xl'], 'md')}
			description={text('description', 'svg description')}
			title={text('title', 'svg title')}
			rotate={text('rotate', '0deg')}
		/>
	)))
	.add('circle icon', withReadme(IconCircleReadme, () => (
		<IconCircle
			background={select('background', ['primary', 'secondary', 'tertiary'], 'primary')}
			name={select('name', Object.keys(icons), 'rightArrow')}
			type={select('type', ['glyph', 'outline', 'colored'], 'glyph')}
			strokeSize={select('strokeSize', [1, 2, 3, 4], 2)}
			iconSize={select('iconSize', ['xs', 'sm', 'md', 'lg', 'xl'], 'md')}
			description={text('description', 'svg description')}
			title={text('title', 'svg title')}
			rotate={text('rotate', '0deg')}
		/>
	)));
