import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import { ArrowButton } from 'atoms';
import AppBar from './app-bar';

storiesOf('Molecules/App Bar', module)
	.addDecorator(checkA11y)
	.addDecorator(withKnobs)
	.add(
		'without children',
		withInfo(`
			App Bar without any children, used when user is logged in.
		`)(() => (
			<AppBar title="LearnSkin" logo="http://fillmurray.com/150/32" />
		))
	)
	.add(
		'with children',
		withInfo(`
			# When to use
			App bar with children, used when the user is not logged and need
			some global CTA
		`)(() => (
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
		))
	);
