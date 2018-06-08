import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Input from './input';

storiesOf('Atoms/Input', module)
	.addDecorator(checkA11y)
	.add('simple input', () => (
		<Input
			large={boolean('isLarge', false)}
			gray={boolean('isGrey', false)}
			type="text"
		/>
	))
	.add('input with grey background', () => (
		<Input
			large={boolean('isLarge', false)}
			gray={boolean('isGray', false)}
			type="text"
		/>
	));
