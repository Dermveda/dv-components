import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
/* eslint-enable import/no-extraneous-dependencies */

import AppBarReadme from './docs/app-bar.md';
import { ArrowButton } from 'atoms';
import { Lipsum } from 'utils';
import AppBar from './app-bar';

storiesOf('Molecules/App Bar', module)
	.addDecorator(withReadme(AppBarReadme))
	.add('without children', () => (
		<div>
			<AppBar title="LearnSkin" logo="http://fillmurray.com/150/32" />
			<Lipsum />
		</div>
	))
	.add('with children', () => (
		<div>
			<AppBar title="LearnSkin" logo="http://fillmurray.com/150/32">
				<ArrowButton
					type="primary"
					small
					outline
					onClick={action('clicked')}
				>
					Try it Free
				</ArrowButton>
			</AppBar>
			<Lipsum />
		</div>
	));
