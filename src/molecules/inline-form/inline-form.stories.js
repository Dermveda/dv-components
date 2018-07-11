import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { object, text, boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import InlineFormReadme from './docs/inline-form.md';
import InlineForm from './inline-form';

storiesOf('Molecules/Inline Form', module)
	.addDecorator(withReadme(InlineFormReadme))
	.add('static inline form', () => (
		<InlineForm
			onSubmit={action('submitted form')}
			inputAttributes={
				object('input attributes', {
					type: 'text',
					name: 'inputName'
				})
			}
			label={text('label', 'Email')}
			inputValue={text('inputValue', '')}
			buttonAttributes={object('button attributes', {
				type: 'primary'
			})}
			buttonText={text('button text', 'Submit')}
			successMessage={text('successMessage', 'Success Message')}
			success={boolean('success', false)}
			loading={boolean('loading', false)}
		/>
	))
	.add('promise inline form successful', () => {
		const submit = x => new Promise(resolve =>
			setTimeout(() => resolve(action('submitted newsletter')(x)), 1000)
		);

		return (
			<InlineForm
				onSubmit={submit}
				inputAttributes={
					object('input attributes', {
						type: 'text',
						name: 'inputName'
					})
				}
				label={text('label', 'Email')}
				inputValue={text('inputValue', '')}
				buttonAttributes={object('button attributes', {
					type: 'primary'
				})}
				buttonText={text('button text', 'Submit')}
				successMessage={text('successMessage', 'Success Message')}
				success={boolean('success', false)}
				loading={boolean('loading', false)}
				isPromise
			/>
		);
	})
	.add('promise inline form error', () => {
		const submit = x => new Promise((resolve, reject) =>
			setTimeout(() => reject(action('submitted newsletter')(x)), 1000)
		);

		return (
			<InlineForm
				onSubmit={submit}
				inputAttributes={
					object('input attributes', {
						type: 'text',
						name: 'inputName'
					})
				}
				label={text('label', 'Email')}
				inputValue={text('inputValue', '')}
				buttonAttributes={object('button attributes', {
					type: 'primary'
				})}
				buttonText={text('button text', 'Submit')}
				successMessage={text('successMessage', 'Success Message')}
				success={boolean('success', false)}
				loading={boolean('loading', false)}
				isPromise
			/>
		);
	});
