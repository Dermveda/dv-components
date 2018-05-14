import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import InlineForm from './inline-form';

storiesOf('Molecules/Inline Form', module)
	.addDecorator(checkA11y)
	.addDecorator(withKnobs)
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
