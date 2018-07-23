import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs/react';
import { createSkeletonProvider } from '@trainline/react-skeletor';
import { withReadme } from 'storybook-readme';
/* eslint-enable import/no-extraneous-dependencies */

import ImageGridReadme from './docs/image-grid.md';
import ImageGrid from './image-grid';

storiesOf('Molecules/Image Grid', module)
	.addDecorator(withReadme(ImageGridReadme))
	.add('left direction', () => (
		<ImageGrid
			imageAttributes={{ src: 'http://fillmurray.com/500/300', alt: '' }}
			direction={select('direction', ['left', 'right'], 'left')}
		>
			Maecenas efficitur sed urna porttitor dictum. Mauris varius est eu libero consectetur pretium. Etiam enim neque, pellentesque id fringilla non, accumsan vel magna. Cras aliquam lectus id nunc malesuada ultrices. Etiam placerat erat pharetra dui sagittis, a pretium orci varius. In ultrices libero quis ipsum pharetra, vel tincidunt elit suscipit. Curabitur pharetra nisi at bibendum congue. Aenean eu dolor in justo hendrerit imperdiet in vel dolor.
		</ImageGrid>
	))
	.add('right direction', () => (
		<ImageGrid
			imageAttributes={{ src: 'http://fillmurray.com/500/300', alt: '' }}
			direction={select('direction', ['left', 'right'], 'right')}
		>
			Maecenas efficitur sed urna porttitor dictum. Mauris varius est eu libero consectetur pretium. Etiam enim neque, pellentesque id fringilla non, accumsan vel magna. Cras aliquam lectus id nunc malesuada ultrices. Etiam placerat erat pharetra dui sagittis, a pretium orci varius. In ultrices libero quis ipsum pharetra, vel tincidunt elit suscipit. Curabitur pharetra nisi at bibendum congue. Aenean eu dolor in justo hendrerit imperdiet in vel dolor.
		</ImageGrid>
	))
	.add('skeleton loading', () => {
		const createSkeletonWrapper = (props) => (
			<ImageGrid {...props} />
		);

		const SkeletonWrapper = createSkeletonProvider(
			{
				imageAttributes: {
					src: '_____',
					alt: '______',
					height: '250',
					style: {
						maxWidth: '400px'
					}
				},
				children: '______ _______ _____________ ______ ______ _______ _____________ ______ ______ _______ _____________ ______ ______ _______ _____________ ______ ______ _______ _____________ ____________ _______ _____________ ______'
			},
			() => boolean('skeleton loading', true),
			'pending'
		)(createSkeletonWrapper);

		return (
			<SkeletonWrapper
				imageAttributes={{ src: 'http://fillmurray.com/500/300', alt: '' }}
				direction={select('direction', ['left', 'right'], 'right')}
			>
				Maecenas efficitur sed urna porttitor dictum. Mauris varius est eu libero consectetur pretium. Etiam enim neque, pellentesque id fringilla non, accumsan vel magna. Cras aliquam lectus id nunc malesuada ultrices. Etiam placerat erat pharetra dui sagittis, a pretium orci varius. In ultrices libero quis ipsum pharetra, vel tincidunt elit suscipit. Curabitur pharetra nisi at bibendum congue. Aenean eu dolor in justo hendrerit imperdiet in vel dolor.
			</SkeletonWrapper>
		);
	});
