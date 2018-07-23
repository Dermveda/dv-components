import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { object, text, select } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import ListItem from './list-item';
import ImageListItem from './image-list-item';
import IconListItem from './icon-list-item';

storiesOf('Molecules/List Item', module)
	.add('simple input', () => {
		const buttonAttributes = {
			text: 'Learn More',
			nostyle: true,
			onClick: () => {}
		};

		return (
			<ListItem
				to={text('to', 'internal link')}
				title={text('title', 'Physicians CME')}
				buttonAttributes={object('button', buttonAttributes)}
				type={select('background', ['white', 'gray', 'primary'], 'white')}
				subtitle={text('subtitle', 'Something')}>
				{text(
					'description',
					`
					We’re on a mission to provide mobile-friendly continuing education
					taught by the world’s top skin care experts. Receive CE credits from anywhere
					in the world, on any device.
				`
				)}
			</ListItem>
		);
	})
	.add('with icons', () => {
		const buttonAttributes = {
			text: 'Learn More',
			nostyle: true,
			onClick: () => {}
		};

		const iconAttributes = {
			name: 'rightArrow'
		};

		return (
			<IconListItem
				to={text('to', '/tester')}
				title={text('title', 'Physicians CME')}
				iconAttributes={object('icon', iconAttributes)}
				buttonAttributes={object('button', buttonAttributes)}
				subtitle={text('subtitle', 'Something')}
				type={select('background', ['white', 'grey', 'primary'], 'white')}>
				{text(
					'description',
					`
					We’re on a mission to provide mobile-friendly continuing education
					taught by the world’s top skin care experts. Receive CE credits from anywhere
					in the world, on any device.
				`
				)}
			</IconListItem>
		);
	})
	.add('with images', () => {
		const buttonAttributes = {
			text: 'Learn More',
			nostyle: true,
			onClick: () => {}
		};

		const imageAttributes = {
			src: 'http://fillmurray.com/300/300',
			alt: 'bill murray'
		};

		return (
			<ImageListItem
				to={text('to', '/tester')}
				title={text('title', 'Physicians CME')}
				subtitle={text('subtitle', 'Something')}
				imageAttributes={object('icon', imageAttributes)}
				buttonAttributes={object('button', buttonAttributes)}
				type={select('background', ['white', 'grey', 'primary'], 'white')}>
				{text(
					'description',
					`
					We’re on a mission to provide mobile-friendly continuing education
					taught by the world’s top skin care experts. Receive CE credits from anywhere
					in the world, on any device.
				`
				)}
			</ImageListItem>
		);
	});
