import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Badge from './badge';

storiesOf('Atoms/Badge', module)
	.add('simple badge', () => (
		<Badge>
			{text('children', 'Simple')}
		</Badge>
	));
