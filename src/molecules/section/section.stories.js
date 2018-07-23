import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { createSkeletonProvider } from '@trainline/react-skeletor';
import { object, text, select, boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import SectionReadme from './docs/section.md';
import CircleReadme from './docs/circle-section.md';

import Section from './section';
import CircleSection from './circle-section';

storiesOf('Molecules/Section', module)
	.add('simple section', withReadme(SectionReadme, () => {
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
	}))
	.add('with background image', withReadme(SectionReadme, () => {
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
	}))
	.add('with background image pattern', withReadme(SectionReadme, () => {
		const buttonAttributes = {
			text: 'Start Earning CE',
			onClick: action('clicked section cta'),
			type: 'bold',
			gradient: true
		};

		return (
			<Section
				bg={text('bg', 'gray.light')}
				imageAttributes={object('imageAttributes', {
					src: 'http://fillmurray.com/100/100',
					alt: 'something',
				})}
				titleAttributes={object('titleAttributes', {
					fontFamily: 'styled'
				})}
				backgroundImage={object('backgroundImage', {
					url: 'https://transparenttextures.com/patterns/always-grey.png',
					pattern: true,
					size: '90px'
				})}
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
	}))
	.add('circle section', withReadme(CircleReadme, () => (
		<div style={{ marginTop: '120px' }}>
			<CircleSection
				content
				bg="gray.light"
				centered
				circleAttributes={object('circleAttributes', {
					text: 'Hi there I\'m and example!',
					bg: 'tomato'
				})}
			>
				Duis sit amet sem mi. Maecenas aliquam, orci in imperdiet
				dapibus, tellus metus sodales dolor, et tempus lacus eros
				eget dolor. Etiam quis metus commodo, rhoncus velit ultrices,
				pharetra nisl.
			</CircleSection>
		</div>
	)))
	.add('circle section skeleton loading', () => {
		const createSkeletonWrapper = (props) => (
			<CircleSection {...props} />
		);

		const SkeletonWrapper = createSkeletonProvider(
			{
				circleAttributes: {
					text: '_________'
				}
			},
			() => boolean('skeleton loading', true),
			'pending'
		)(createSkeletonWrapper);

		return (
			<SkeletonWrapper
				content
				bg="gray.light"
				centered
				circleAttributes={object('circleAttributes', {
					text: 'Hi there I\'m and example!',
					bg: 'tomato'
				})}
			>
				Maecenas efficitur sed urna porttitor dictum. Mauris varius est eu libero consectetur pretium.
			</SkeletonWrapper>
		);
	});
