import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Label from './label';
import {Input} from 'atoms';

storiesOf('Atoms/Form Elements', module)
	.addDecorator(checkA11y)
	.addDecorator(withKnobs)
	.add('label', () => (
		<Label>
			First Name
			<Input type="text" gray placeholder="John Doe" />
		</Label>
	));
