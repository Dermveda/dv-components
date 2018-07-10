import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { text, object } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import H3Readme from './docs/h3.md';
import SubtitleReadme from './docs/subtitle.md';
import ContentReadme from './docs/content.md';
import BoxReadme from './docs/box.md';
import FlexboxReadme from './docs/flex-box.md';
import GridboxReadme from './docs/grid-box.md';

import { H3, Subtitle, Content, Box, FlexBox, GridBox } from './typography';

storiesOf('Atoms/Typography', module)
	.add('h3', withReadme(H3Readme, () => (
		<H3 {...object('utils', {})}>
			{text('children', 'This is an example of an h3')}
		</H3>
	)))
	.add('subtitle', withReadme(SubtitleReadme, () => (
		<Subtitle {...object('utils', {})}>
			{text('children', 'I am a subtitle')}
		</Subtitle>
	)))
	.add('content', withReadme(ContentReadme, () => (
		<Content {...object('utils', {})}>
			{text('children'), 'I am content'}
		</Content>
	)))
	.add('box', withReadme(BoxReadme, () => (
		<Box {...object('utils')}>
			{text('children'), 'I am content'}
		</Box>
	)))
	.add('flex box', withReadme(FlexboxReadme, () => (
		<FlexBox {...object('utils')}>
			<div>tester box</div>
			<div>another tester box</div>
		</FlexBox>
	)))
	.add('grid box', withReadme(GridboxReadme, () => (
		<GridBox {...object('utils')}>
			<div>tester box</div>
			<div>another tester box</div>
		</GridBox>
	)));
