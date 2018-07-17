import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
/* eslint-enable import/no-extraneous-dependencies */

import HiddenReadme from './docs/hidden-text.md';

import HiddenText from './hidden-text';

storiesOf('Atoms/Hidden Text', module)
	.addDecorator(withReadme(HiddenReadme))
	.add('hidden text', () => (
		<div>
			<HiddenText>hidden text</HiddenText>
			Use the inspector to see the hidden text
		</div>
	));
