import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withKnobs, select } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import ColumnLayout from './column-layout';

storiesOf('Molecules/Column Layout', module)
	.addDecorator(checkA11y)
	.addDecorator(withKnobs)
	.add('simple input', () => (
		<ColumnLayout
			imageAttributes={{ src: 'http://fillmurray.com/500/300', alt: '' }}
			direction={select('direction', ['left', 'right'], 'right')}
		>
			Maecenas efficitur sed urna porttitor dictum. Mauris varius est eu libero consectetur pretium. Etiam enim neque, pellentesque id fringilla non, accumsan vel magna. Cras aliquam lectus id nunc malesuada ultrices. Etiam placerat erat pharetra dui sagittis, a pretium orci varius. In ultrices libero quis ipsum pharetra, vel tincidunt elit suscipit. Curabitur pharetra nisi at bibendum congue. Aenean eu dolor in justo hendrerit imperdiet in vel dolor.
		</ColumnLayout>
	));
