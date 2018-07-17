import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
/* eslint-enable import/no-extraneous-dependencies */

import IconAttributesReadme from './docs/icon-attributes.md';
import IconAttributes from './icon-attributes';

storiesOf('Molecules/Icon Attributes', module)
	.addDecorator(withReadme(IconAttributesReadme))
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
		return <IconAttributes attributeListing={object('attributeListing', defaultAttributes)} />;
	});
