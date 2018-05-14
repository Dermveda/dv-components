import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Button from './button';
import ButtonLink from './button-link';
import { ArrowButton, ArrowButtonLink } from './arrow-button';

storiesOf('Atoms/Buttons', module)
	.addDecorator(checkA11y)
	.addDecorator(withKnobs)
	.add(
		'with text',
		withInfo(`
            ## About
            A simple button that executes an action

            ## Usage
            ~~~js
            import { Button } from 'dv-component-library/atoms';

            <Button>I'm a simple button!</Button>
            ~~~
        `)(() => (
			<Button
				large={boolean('isLarge', false)}
				onClick={action('button click')}
				type={select('button types', ['primary', 'secondary', 'tertiary', 'bold'], 'primary')}
				gradient={boolean('isGradient', false)}
				outline={boolean('isOutline', false)}
				raised={boolean('isRaised', false)}
				nostyle={boolean('isNoStyle', false)}
				squared={boolean('isSquared', false)}
				white={boolean('isWHite', false)}
			>
				{text('Text', 'I am a simple button')}
			</Button>
		))
	)
	.add('button link', () => (
		<ButtonLink
			href="#"
			large={boolean('isLarge', false)}
			onClick={action('button click')}
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
	.add('arrow button', () => (
		<ArrowButton
			large={boolean('isLarge', false)}
			onClick={action('button click')}
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
	.add('arrow button link', () => (
		<ArrowButtonLink
			href="#"
			large={boolean('isLarge', false)}
			onClick={action('button click')}
			type={select('button types', ['primary', 'secondary', 'tertiary', 'bold'], 'primary')}
			gradient={boolean('isGradient', false)}
			nostyle={boolean('isNoStyle', false)}
			raised={boolean('isRaised', false)}
			squared={boolean('isSquared', false)}
			white={boolean('isWHite', false)}
		>
			{text('test', 'I am a simple button')}
		</ArrowButtonLink>
	));
