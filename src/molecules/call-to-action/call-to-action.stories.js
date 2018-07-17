import React from 'react';
import { createSkeletonProvider } from '@trainline/react-skeletor';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import { text, object, boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import CallToActionReadme from './docs/call-to-action.md';
import CallToAction from './call-to-action';

storiesOf('Molecules/Call To Action', module)
	.addDecorator(withReadme(CallToActionReadme))
	.add('onclick function', () => (
		<CallToAction
			title={text('title', 'Annual Symposium')}
			buttonProps={object('buttonProps', {
				text: 'Register Today',
				onClick: action('clicked-cta')
			})}
		>
			{text('description', 'Attend the world\'s first annual integrative Dermatology Symposium in Sacramento on October 19-21st, 2018')}
		</CallToAction>
	))
	.add('internal link', () => (
		<CallToAction
			title={text('title', 'Annual Symposium')}
			buttonProps={object('buttonProps', {
				text: 'Register Today',
				to: '/internal-link'
			})}
		>
			{text('description', 'Attend the world\'s first annual integrative Dermatology Symposium in Sacramento on October 19-21st, 2018')}
		</CallToAction>
	))
	.add('external link', () => (
		<CallToAction
			title={text('title', 'Annual Symposium')}
			buttonProps={object('buttonProps', {
				text: 'Register Today',
				href: 'http://google.com'
			})}
		>
			{text('description', 'Attend the world\'s first annual integrative Dermatology Symposium in Sacramento on October 19-21st, 2018')}
		</CallToAction>
	))
	.add('skeleton loading', () => {
		const createSkeletonWrapper = ({ children, ...props }) => ( /* eslint-disable-line */
			<CallToAction {...props}>{children}</CallToAction>
		);

		const SkeletonWrapper = createSkeletonProvider(
			{
				title: '_________',
				buttonProps: {
					text: '________',
					onClick: () => {}
				},
				children: '_________'
			},
			() => boolean('skeleton loading', true),
			'pending'
		)(createSkeletonWrapper);

		return (
			<SkeletonWrapper
				title={text('title', 'Test Title')}
				buttonAttributes={object('buttonAttributes', {
					text: 'Read More',
					to: '/'
				})}
			/>
		);
	});
