import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withKnobs, object, text, select } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import ListItem from './list-item';
import IconListItem from './icon-list-item';

storiesOf('Molecules/List Item', module)
	.addDecorator(checkA11y)
	.addDecorator(withKnobs)
	.add('simple input', () => {
		const buttonAttributes = {
			text: 'Learn More',
			nostyle: true
		};

		return (
			<ListItem
				title={text('title', 'Physicians CME')}
				buttonAttributes={object('button', buttonAttributes)}
				type={select('background', ['white', 'gray', 'primary'], 'white')}
			>
				{text('description', `
					We’re on a mission to provide mobile-friendly continuing education
					taught by the world’s top skin care experts. Receive CE credits from anywhere
					in the world, on any device.
				`)}
			</ListItem>
		);
	})
	.add('with icons', () => {
		const buttonAttributes = {
			text: 'Learn More',
			nostyle: true
		};

		const iconAttributes = {
			name: 'heart'
		};

		return (
			<IconListItem
				title={text('title', 'Physicians CME')}
				iconAttributes={object('icon', iconAttributes)}
				buttonAttributes={object('button', buttonAttributes)}
				type={select('background', ['white', 'grey', 'primary'], 'white')}
			>
				{text('description', `
					We’re on a mission to provide mobile-friendly continuing education
					taught by the world’s top skin care experts. Receive CE credits from anywhere
					in the world, on any device.
				`)}
			</IconListItem>
		);
	});
