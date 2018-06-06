import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Label from './label';
import Select from './select';
import { Input } from 'atoms';

storiesOf('Atoms/Form Elements', module)
	.addDecorator(checkA11y)
	.addDecorator(withKnobs)
	.add('label', () => (
		<Label>
			First Name
			<Input type="text" gray placeholder="John Doe" />
		</Label>
	))
	.add('single select', () => (
		<Select
			name="example"
			options={[
				{label: 'First Item', value: '1'},
				{label: 'Second Item', value: '2'},
				{label: 'Third Item', value: '3'}
			]}
			gray={boolean('isGray', false)}
		/>
	))
	.add('multi select', () => (
		<Select
			isMulti
			name="example"
			options={[
				{label: 'First Item', value: '1'},
				{label: 'Second Item', value: '2'},
				{label: 'Third Item', value: '3'}
			]}
			gray={boolean('isGray', false)}
		/>
	));
