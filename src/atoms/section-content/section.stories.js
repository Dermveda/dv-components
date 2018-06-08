import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { select } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import SectionContainer from './section-container';

storiesOf('Atoms/Section Content', module)
	.addDecorator(checkA11y)
	.add('simple section', () => (
		<SectionContainer type={select('background', ['white', 'gray', 'primary', 'tertiary', 'secondary'], 'white')}>
			this is an example section
		</SectionContainer>
	));
