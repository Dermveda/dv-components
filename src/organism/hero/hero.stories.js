import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, object, select } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Hero from './hero';
import { Button } from 'atoms';

storiesOf('Organism/Hero', module)
	.addDecorator(checkA11y)
	.addDecorator(withKnobs)
	.add(
		'without children',
		withInfo(`
			App Bar without any children, used when user is logged in.
		`)(() => {
			const imageAttributes = {
				src: 'http://fillmurray.com/500/250',
				alt: 'Bill Murray'
			};

			return (
				<Hero
					title={text('title', 'Dermatology Education for Professionals')}
					subtitle={text('subtitle', 'Eczema')}
					imageAttributes={object('image attributes', imageAttributes)}
					type={select('background', ['white', 'gray', 'secondary', 'primary', 'tertiary', 'transparent'], 'transparent')}
				>
					<p>
						{text('description', 'Attend the world\'s first annual integrative Dermatology Symposium in Sacramento on October 19-21st, 2018')}
					</p>
					<Button
						type="bold"
						gradient
						onClick={action('clicked button')}
					>
						Try it Free
					</Button>
				</Hero>
			);
		})
	);
