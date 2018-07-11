import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Element } from 'react-scroll';
import { object } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import { Lipsum } from 'utils';
/* eslint-enable import/no-extraneous-dependencies */

import inPageNavReadme from './docs/inpage-nav.md';
import desktopReadme from './docs/desktop-inpage-nav.md';
import mobileReadme from './docs/mobile-inpage-nav.md';

import InPageNav from './inpage-nav';
import MobileInPageNav from './mobile-inpage-nav';
import DesktopInPageNav from './desktop-inpage-nav';

storiesOf('Molecules/In Page Nav', module)
	.add('responsive nav', withReadme(inPageNavReadme, () => (
		<div>
			<InPageNav links={object('links', [
				{
					text: 'Tester 1',
					to: 'test1'
				},
				{
					text: 'Tester 2',
					to: 'test2'
				}
			])} />
			<Element name="test1">
				<Lipsum />
			</Element>
			<Element name="test2">
				<Lipsum />
			</Element>
		</div>
	)))
	.add('mobile nav', withReadme(mobileReadme, () => (
		<div>
			<MobileInPageNav links={object('links', [
				{
					text: 'Tester 1',
					to: 'test1'
				},
				{
					text: 'Tester 2',
					to: 'test2'
				}
			])} />
			<Element name="test1">
				<Lipsum />
			</Element>
			<Element name="test2">
				<Lipsum />
			</Element>
		</div>
	)))
	.add('desktop nav', withReadme(desktopReadme, () => (
		<div>
			<DesktopInPageNav links={object('links', [
				{
					text: 'Tester 1',
					to: 'test1'
				},
				{
					text: 'Tester 2',
					to: 'test2'
				}
			])} />
			<Element name="test1">
				<Lipsum />
			</Element>
			<Element name="test2">
				<Lipsum />
			</Element>
		</div>
	)));
