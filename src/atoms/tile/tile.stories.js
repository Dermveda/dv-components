import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { select, text } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Tile from './tile';

storiesOf('Atoms/Tile', module)
	.addDecorator(checkA11y)
	.add('simple input', () => (
		<Tile
			to={text('url', '/test')}
			title={text('tile title', 'Example course name really long')}
			type={select('background', ['gray', 'primary', 'tertiary'])}
			imgSrc={text('imageUrl', 'http://fillmurray.com/600/600')}
		/>
	));
