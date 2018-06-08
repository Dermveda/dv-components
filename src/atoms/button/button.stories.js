import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { boolean, text, select } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Button from './button';
import ButtonLink from './button-link';
import { ArrowButton, ArrowButtonLink } from './arrow-button';

storiesOf('Atoms/Buttons', module)
	.addDecorator(checkA11y)
	.add(
		'with text',
		withInfo(`
            ## About
            A simple button that executes an action

            ## Usage
            ~~~js
			import { Atoms } from '@dnovicki/dv-components';

			<Atoms.Button>I'm a Button!</Atoms.Button>
            ~~~
        `)(() => (
			<Button
				large={boolean('isLarge', false)}
				onClick={action('button click')}
				type={select('button types', ['primary', 'secondary', 'tertiary', 'bold'], 'primary')}
				gradient={boolean('isGradient', false)}
				outline={boolean('isOutline', false)}
				raised={boolean('isRaised', false)}
				small={boolean('isSmall', false)}
				nostyle={boolean('isNoStyle', false)}
				squared={boolean('isSquared', false)}
				white={boolean('isWHite', false)}
			>
				{text('Text', 'I am a simple button')}
			</Button>
		))
	)
	.add(
		'button link',
		withInfo(`
			## About
			A simple button that uses internal links or external links. External links
			are automatically given the noreferrer rel attribute for security purposes, as
			well as open in a new tab. Local links use react-router-dom

			## Usage
			import { Atoms } from '@dnovicki/dv-components';

			<Atoms.ButtonLink to="/local-link">Go To Local Link</Atoms.ButtonLink>
			<Atoms.ButtonLink href="http://google.com">Go To Google</Atoms.ButtonLink>
		`)(() => (
			<ButtonLink
				href="#"
				large={boolean('isLarge', false)}
				onClick={action('button click')}
				small={boolean('isSmall', false)}
				type={select('button types', ['primary', 'secondary', 'tertiary', 'bold'], 'primary')}
				gradient={boolean('isGradient', false)}
				nostyle={boolean('isNoStyle', false)}
				raised={boolean('isRaised', false)}
				squared={boolean('isSquared', false)}
				white={boolean('isWHite', false)}
			>
				{text('test', 'I am a simple button')}
			</ButtonLink>
		))
	)
	.add(
		'arrow button',
		withInfo(`
			## About
			An arrow button that executes an action. This should be used when going to a new
			page when the no style attribute is used, or when submitting input. This should be
			used sparingly as using arrows everywhere may cause the arrow to lose importance.

			## Usage
			import { Atoms } from '@dnovicki/dv-components';

			<Atoms.ArrowButton>Arrow Button</Atoms.ArrowButton>
		`)(() => (
			<ArrowButton
				large={boolean('isLarge', false)}
				onClick={action('button click')}
				small={boolean('isSmall', false)}
				type={select('button types', ['primary', 'secondary', 'tertiary', 'bold'], 'primary')}
				gradient={boolean('isGradient', false)}
				nostyle={boolean('isNoStyle', false)}
				raised={boolean('isRaised', false)}
				white={boolean('isWHite', false)}
				squared={boolean('isSquared', false)}
			>
				{text('test', 'I am a simple button')}
			</ArrowButton>
		))
	)
	.add(
		'arrow button link',
		withInfo(`
			## About
			An arrow button that goes to a seperate page. This should be used when going to a new
			page when the no style attribute is used, or when submitting input. This should be
			used sparingly as using arrows everywhere may cause the arrow to lose importance.

			## Usage
			import { Atoms } from '@dnovicki/dv-components';

			<Atoms.ArrowButton>Arrow Button</Atoms.ArrowButton>
		`)(() => (
			<ArrowButtonLink
				href="#"
				large={boolean('isLarge', false)}
				onClick={action('button click')}
				small={boolean('isSmall', false)}
				type={select('button types', ['primary', 'secondary', 'tertiary', 'bold'], 'primary')}
				gradient={boolean('isGradient', false)}
				nostyle={boolean('isNoStyle', false)}
				raised={boolean('isRaised', false)}
				squared={boolean('isSquared', false)}
				white={boolean('isWHite', false)}
			>
				{text('test', 'I am a simple button')}
			</ArrowButtonLink>
		))
	)
