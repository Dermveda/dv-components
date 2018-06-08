import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import CallToAction from './call-to-action';

storiesOf('Molecules/Call To Action', module)
	.add(
		'without children',
		withInfo(`
			App Bar without any children, used when user is logged in.
		`)(() => {
			const buttonText = text('button name', 'Register Today');
			return (
				<CallToAction
					title={text('title', 'Annual Symposium')}
					buttonProps={{ text: buttonText, onClick: action('clicked-cta') }}
				>
					{text('description', 'Attend the world\'s first annual integrative Dermatology Symposium in Sacramento on October 19-21st, 2018')}
				</CallToAction>
			);
		})
	);
