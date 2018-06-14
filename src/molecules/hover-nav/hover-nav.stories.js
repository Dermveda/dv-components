import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import HoverNav from './hover-nav';

storiesOf('Molecules/Hover Nav', module)
	.add('simple input', () => (
		<HoverNav
			large={boolean('isLarge', false)}
			gray={boolean('isGrey', false)}
			type="text"
		/>
	));
