import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
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
	));
