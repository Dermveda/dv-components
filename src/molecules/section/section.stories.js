import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { object, text, select } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Section from './section';

storiesOf('Molecules/Section', module)
	.add('simple section', () => {
		const buttonAttributes = {
			text: 'Start Earning CE',
			onClick: action('clicked section cta'),
			type: 'bold',
			gradient: true
		};

		const titleAttributes = {
			color: null
		};

		return (
			<Section
				is="header"
				imageAttributes={{
					src: 'http://fillmurray.com/100/100',
					alt: 'something'
				}}
				title={text('Title', 'Why LearnSkin')}
				titleAttributes={object('title styles', titleAttributes)}
				buttonAttributes={object('button', buttonAttributes)}
				type={select('background', ['white', 'gray', 'primary', 'tertiary'], 'white')}
			>
				Duis sit amet sem mi. Maecenas aliquam, orci in imperdiet
				dapibus, tellus metus sodales dolor, et tempus lacus eros
				eget dolor. Etiam quis metus commodo, rhoncus velit ultrices,
				pharetra nisl.
			</Section>
		);
	})
	.add('with background image', () => {
		const buttonAttributes = {
			text: 'Start Earning CE',
			onClick: action('clicked section cta'),
			type: 'bold',
			gradient: true
		};

		const titleAttributes = {
			color: 'white'
		};

		return (
			<Section
				color="white"
				imageAttributes={{
					src: 'http://fillmurray.com/100/100',
					alt: 'something'
				}}
				backgroundImage={{
					url: 'http://fillmurray.com/500/1000'
				}}
				title={text('Title', 'Why LearnSkin')}
				titleAttributes={object('title styles', titleAttributes)}
				buttonAttributes={object('button', buttonAttributes)}
				type={select('background', ['white', 'gray', 'primary', 'tertiary'], 'white')}
			>
				Duis sit amet sem mi. Maecenas aliquam, orci in imperdiet
				dapibus, tellus metus sodales dolor, et tempus lacus eros
				eget dolor. Etiam quis metus commodo, rhoncus velit ultrices,
				pharetra nisl.
			</Section>
		);
	})
	.add('with background image pattern', () => {
		const buttonAttributes = {
			text: 'Start Earning CE',
			onClick: action('clicked section cta'),
			type: 'bold',
			gradient: true
		};

		return (
			<Section
				bg="gray.light"
				imageAttributes={{
					src: 'http://fillmurray.com/100/100',
					alt: 'something',
				}}
				titleAttributes={{
					fontFamily: 'styled'
				}}
				backgroundImage={{
					url: 'https://transparenttextures.com/patterns/always-grey.png',
					pattern: true,
					size: '90px'
				}}
				title={text('Title', 'Why LearnSkin')}
				buttonAttributes={object('button', buttonAttributes)}
				type={select('background', ['white', 'gray', 'primary', 'tertiary'], 'white')}
			>
				Duis sit amet sem mi. Maecenas aliquam, orci in imperdiet
				dapibus, tellus metus sodales dolor, et tempus lacus eros
				eget dolor. Etiam quis metus commodo, rhoncus velit ultrices,
				pharetra nisl.
			</Section>
		);
	});
