import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { boolean, object, number } from '@storybook/addon-knobs';
/* eslint-enable import/no-extraneous-dependencies */

import { Lipsum } from 'utils';
import BarReadme from './docs/bar.md';
import Bar from './bar';

storiesOf('Atoms/Bar', module)
	.addDecorator(withReadme(BarReadme))
	.add('navigational bar', () => (
		<div>
			<Bar
				{...object('Utilities', {
					bg: 'accent.logo',
					py: 3
				})}
				navBorder={boolean('Navigation Border', false)}
				top={number('Position Top', 0)}
				zIndex={number('ZIndex', 100)}
			>
				<div>test</div>
				<div>test</div>
				<div>test</div>
				<div>test</div>
			</Bar>
			<Lipsum />
		</div>
	));
