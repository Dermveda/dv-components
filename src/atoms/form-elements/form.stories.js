import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { boolean, object, text } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import InputReadme from './docs/input.md';
import LabelReadme from './docs/label.md';
import SelectReadme from './docs/select.md';

import Label from './label';
import Select from './select';
import Input from './input';

storiesOf('Atoms/Form Elements', module)
	.add('label', withReadme(LabelReadme, () => (
		<Label htmlFor="testeroo">
			First Name
			<Input id="testeroo" type="text" gray placeholder="John Doe" />
		</Label>
	)))
	.add('single select', withReadme(SelectReadme, () => (
		<Select
			isMulti={boolean('isMulti', false)}
			name={text('name', 'example')}
			options={object('options', [
				{label: 'First Item', value: '1'},
				{label: 'Second Item', value: '2'},
				{label: 'Third Item', value: '3'}
			])}
			gray={boolean('gray', false)}
		/>
	)))
	.add('multi select', withReadme(SelectReadme, () => (
		<Select
			isMulti={boolean('isMulti', true)}
			name={text('name', 'example')}
			options={object('options', [
				{label: 'First Item', value: '1'},
				{label: 'Second Item', value: '2'},
				{label: 'Third Item', value: '3'}
			])}
			gray={boolean('gray', false)}
		/>
	)))
	.add('simple input', withReadme(InputReadme, () => (
		<Input
			large={boolean('large', false)}
			gray={boolean('gray', false)}
			type={text('type', 'text')}
			{...object('utils', {})}
		/>
	)))
	.add('gray input', withReadme(InputReadme, () => (
		<Input
			large={boolean('large', false)}
			gray={boolean('gray', true)}
			type={text('type', 'text')}
			{...object('utils', {})}
		/>
	)));
