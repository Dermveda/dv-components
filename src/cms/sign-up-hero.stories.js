import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable import/no-extraneous-dependencies */

import { Section, ImageGrid, InlineForm } from '../molecules';
import { FlexBox, Box, ButtonLink } from '../atoms';

storiesOf('CMS/Sign Up Hero', module)
	.add('redirect to sign up form', () => (
		<ImageGrid
			content
			centered
			mobileHide
			direction="right"
			imageAttributes={{
				src: 'http://fillmurray.com/500/500',
				alt: text('Image Alt', 'Bill murray looking good!')
			}}
		>
			<Section
				is="div"
				maxWidth="800px"
				p="0px !important"
				display="block"
				titleAttributes={{
					mt: 0,
					lineHeight: 1.25,
					is: 'h1',
					fontSize: [3, 4],
					textAlign: 'left'
				}}
				title={text('Title', 'This is an example title')}
			>
				{text('Message Text', 'This is an example of a message that can be put here')}
				<Box mt={3}>
					<ButtonLink to="/sign-up" type="primary" raised>
						{text('Button Link', 'Click Me')}
					</ButtonLink>
				</Box>
			</Section>
		</ImageGrid>
	))
	.add('subscribe user', () => {
		const submit = x => new Promise(resolve =>
			setTimeout(() => resolve(action('submitted newsletter')(x)), 1000)
		);

		const newsletter = text('Newsletter', '1234');

		return (
			<ImageGrid
				content
				centered
				mobileHide
				direction="right"
				imageAttributes={{
					src: 'http://fillmurray.com/500/500',
					alt: text('Image Alt', 'Bill murray looking good!')
				}}
			>
				<Section
					is="div"
					maxWidth="800px"
					p="0px !important"
					display="block"
					titleAttributes={{
						mt: 0,
						lineHeight: 1.25,
						is: 'h1',
						fontSize: [3, 4],
						textAlign: 'left'
					}}
					title={text('Title', 'This is an example title')}
				>
					{text('Message Text', 'This is an example of a message that can be put here')}
					<FlexBox>
						<InlineForm
							buttonText={text('Button Text', 'Click Me!')}
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
			</ImageGrid>
		);
	});
