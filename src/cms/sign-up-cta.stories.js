import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable import/no-extraneous-dependencies */

import { Section, InlineForm } from '../molecules';
import { FlexBox, Box } from '../atoms';

storiesOf('CMS/Sign Up CTA', module)
	.add('redirect to sign up form', () => (
		<Section
			title={text('Title', 'Simple title for CTA')}
			content
			centered
			titleAttributes={{ fontSize: [3, 4] }}
			buttonAttributes={{
				to: '/sign-up',
				text: text('Button Text', 'Click Me'),
				raised: true,
				type: 'primary',
				noButtonSpacing: true
			}}
		>
			<Box pb={3} textAlign="center">
				{text('Message Text', 'I am a message for stuff that gets written in')}
			</Box>
		</Section>
	))
	.add('subscribe user', () => {
		const submit = x => new Promise(resolve =>
			setTimeout(() => resolve(action('submitted newsletter')(x)), 1000)
		);

		const newsletter = text('Newsletter', '1234');

		return (
			<Section
				content
				centered
				title={text('Title', 'I am a title')}
				titleAttributes={{ fontSize: [3, 4] }}
				bodyAttributes={{ textAlign: 'center' }}
			>
				<Box textAlign="center">
					{text('Message Text', 'Hello there i am a message for stuff')}
				</Box>
				<FlexBox display="flex">
					<InlineForm
						buttonText={text('Button Text', 'Click Me')}
						mt={4}
						mx="auto"
						inputAttributes={{
							placeholder: 'Email',
							type: 'email',
							name: 'email',
							required: true
						}}
						onSubmit={submit}
					/>
				</FlexBox>
			</Section>
		);
	});
