import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
/* eslint-enable import/no-extraneous-dependencies */

// Readme file imports
import ButtonReadme from './docs/button.md';
import ArrowButtonReadme from './docs/arrow-button.md';
import ArrowButtonLinkReadme from './docs/arrow-button-link.md';
import ButtonLinkReadme from './docs/button-link.md';

import Button from './button';
import ButtonLink from './button-link';
import { ArrowButton, ArrowButtonLink } from './arrow-button';

storiesOf('Atoms/Buttons', module)
	.add('simple button', withReadme(ButtonReadme, () => (
		<Button
			onClick={action('button click')}
			large={boolean('large', false)}
			small={boolean('small', false)}
			type={select('button types', ['primary', 'secondary', 'tertiary', 'bold'], 'primary')}
			gradient={boolean('gradient', false)}
			nostyle={boolean('nostyle', false)}
			raised={boolean('raised', false)}
			squared={boolean('squared', false)}
			white={boolean('white', false)}
		>
			{text('Text', 'I am a simple button')}
		</Button>
	)))
	.add('internal button link', withReadme(ButtonLinkReadme, () => (
		<ButtonLink
			to="/page"
			large={boolean('large', false)}
			small={boolean('small', false)}
			type={select('button types', ['primary', 'secondary', 'tertiary', 'bold'], 'primary')}
			gradient={boolean('gradient', false)}
			nostyle={boolean('nostyle', false)}
			raised={boolean('raised', false)}
			squared={boolean('squared', false)}
			white={boolean('white', false)}
		>
			{text('test', 'I am a simple button')}
		</ButtonLink>
	)))
	.add('external button link', withReadme(ButtonLinkReadme, () => (
		<ButtonLink
			href="http://google.com"
			large={boolean('large', false)}
			small={boolean('small', false)}
			type={select('button types', ['primary', 'secondary', 'tertiary', 'bold'], 'primary')}
			gradient={boolean('gradient', false)}
			nostyle={boolean('nostyle', false)}
			raised={boolean('raised', false)}
			squared={boolean('squared', false)}
			white={boolean('white', false)}
		>
			{text('test', 'I am a simple button')}
		</ButtonLink>
	)))
	.add('arrow button', withReadme(ArrowButtonReadme, () => (
		<ArrowButton
			onClick={action('button click')}
			large={boolean('large', false)}
			small={boolean('small', false)}
			type={select('button types', ['primary', 'secondary', 'tertiary', 'bold'], 'primary')}
			gradient={boolean('gradient', false)}
			nostyle={boolean('nostyle', false)}
			raised={boolean('raised', false)}
			squared={boolean('squared', false)}
			white={boolean('white', false)}
		>
			{text('test', 'I am a simple button')}
		</ArrowButton>
	)))
	.add('internal arrow button link', withReadme(ArrowButtonLinkReadme, () => (
		<ArrowButtonLink
			to="/page"
			large={boolean('large', false)}
			small={boolean('small', false)}
			type={select('button types', ['primary', 'secondary', 'tertiary', 'bold'], 'primary')}
			gradient={boolean('gradient', false)}
			nostyle={boolean('nostyle', false)}
			raised={boolean('raised', false)}
			squared={boolean('squared', false)}
			white={boolean('white', false)}
		>
			{text('test', 'I am a simple button')}
		</ArrowButtonLink>
	)))
	.add('external arrow button link', withReadme(ArrowButtonLinkReadme, () => (
		<ArrowButtonLink
			href="http://google.com"
			large={boolean('large', false)}
			small={boolean('small', false)}
			type={select('button types', ['primary', 'secondary', 'tertiary', 'bold'], 'primary')}
			gradient={boolean('gradient', false)}
			nostyle={boolean('nostyle', false)}
			raised={boolean('raised', false)}
			squared={boolean('squared', false)}
			white={boolean('white', false)}
		>
			{text('test', 'I am a simple button')}
		</ArrowButtonLink>
	)));
