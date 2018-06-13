import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { Element } from 'react-scroll';
/* eslint-enable import/no-extraneous-dependencies */

import InPageNav from './inpage-nav';
import MobileInPageNav from './mobile-inpage-nav';

storiesOf('Molecules/In Page Nav', module)
	.add('desktop nav', () => (
		<div>
			<InPageNav links={[
				{
					text: 'Tester 1',
					to: 'test1'
				},
				{
					text: 'Tester 2',
					to: 'test2'
				}
			]} />
			<Element name="test1">
				<div style={{ height: '120vh', width: '100%', backgroundColor: 'tomato' }}>
					<h1>Tester Div</h1>
				</div>
			</Element>
			<Element name="test2">
				<div style={{ height: '120vh', width: '100%', backgroundColor: 'rebeccapurple' }}>
					<h1>Another Div</h1>
				</div>
			</Element>
		</div>
	))
	.add('mobile nav', () => (
		<div>
			<MobileInPageNav links={[
				{
					text: 'Tester 1',
					to: 'test1'
				},
				{
					text: 'Tester 2',
					to: 'test2'
				}
			]} />
			<Element name="test1">
				<div style={{ height: '120vh', width: '100%', backgroundColor: 'tomato' }}>
					<h1>Tester Div</h1>
				</div>
			</Element>
			<Element name="test2">
				<div style={{ height: '120vh', width: '100%', backgroundColor: 'rebeccapurple' }}>
					<h1>Another Div</h1>
				</div>
			</Element>
		</div>
	));
