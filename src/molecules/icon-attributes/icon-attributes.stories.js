import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import IconAttributes from './icon-attributes';

storiesOf('Molecules/Icon Attributes', module)
	.addDecorator(checkA11y)
	.addDecorator(withKnobs)
	.add('simple input', () => {
		const defaultAttributes = [
			{
				iconAttributes: { name: 'clock' },
				label: 'Time',
				text: '3 hrs'
			},{
				iconAttributes: { name: 'award' },
				label: 'CME Credits',
				text: '0.75 Credits'
			}
			,{
				iconAttributes: { name: 'price' },
				label: 'Price',
				text: 'Free'
			}
		];
		return <IconAttributes attributeListing={defaultAttributes} />;
	});
