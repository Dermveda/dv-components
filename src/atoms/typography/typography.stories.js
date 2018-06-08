import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import { H3 } from './typography';

storiesOf('Atoms/Typography', module)
	.add('h3', () => (
		<H3>{text('header text', 'This is a simple example of a h3')}</H3>
	));
