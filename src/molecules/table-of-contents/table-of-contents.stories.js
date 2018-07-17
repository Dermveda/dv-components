import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import { Element } from 'react-scroll';
import TableOfContents from './table-of-contents';

storiesOf('Molecules/Table of Contents', module)
	.add('simple input', () => (
		<div>
			<TableOfContents
				contents={object('contents', [
					{
						title: 'Something',
						links: [
							{ text: 'Western Summary', to: '/western' },
							{ text: 'Western Summary', to: '/western' },
							{ text: 'External Url', href: 'http://google.com' },
							{ text: 'Internal Link', key: 'hi-paul' }
						]
					}
				])}
			/>
			<Element name="hi-paul">
				asdlkfja
			</Element>
		</div>

	));
