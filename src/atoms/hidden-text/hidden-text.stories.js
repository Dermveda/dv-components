import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable import/no-extraneous-dependencies */

import HiddenText from './hidden-text';

storiesOf('Atoms/Hidden Text', module)
	.add('hidden text',
		withInfo(`
			Creates a span that hides the text visually, but is still available in the dom.
			This is mostly for screen readers.
		`)(() => (
			<div>
				<HiddenText>hidden text</HiddenText>
				Use the inspector to see the hidden text
			</div>
		))
	);
