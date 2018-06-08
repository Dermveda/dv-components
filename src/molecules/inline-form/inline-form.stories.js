import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { object, text } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import InlineForm from './inline-form';

storiesOf('Molecules/Inline Form', module)
	.add('simple input', () => (
		<InlineForm
			onSubmit={action('submitted form')}
			inputAttributes={
				object('input attributes', {
					type: 'input',
					name: 'inputName'
				})
			}
			buttonAttributes={object('button attributes', {})}
			buttonText={text('button text', 'Submit')}
		/>
	));
