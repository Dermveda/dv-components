import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import ArticleTile from './article-tile';

storiesOf('Molecules/Article Tile', module)
	.add('large article tile', () => (
		<ArticleTile
			large
			to="/article-link"
			imageAttributes={{
				src: 'https://res.cloudinary.com/dermveda/image/upload/q_auto,f_auto,dpr_auto,w_900,c_limit/v1502729866/posts/image/unexpected-ways-in-which-runing-can-affect-your-skin.jpg',
				alt: 'test'
			}}
			titleAttributes={{
				text: 'Lorem ipsum dolor sit ametjkdfjkdldkfdkfj, consectetuer',
				fontSize: 2,
			}}
			subtitleAttributes={{
				text: 'DIY',
				to: '/test',
			}}
			description="Ut odio libero, pharetra ut nunc volutpat, aliquam sollicitudin tellus.
			Fusce consequat molestie ligula."
		>
			article footer :)
		</ArticleTile>
	))
	.add('small article tile', () => (
		<ArticleTile
			to="/article-link"
			imageAttributes={{
				src: 'https://res.cloudinary.com/dermveda/image/upload/q_auto,f_auto,dpr_auto,w_900,c_limit/v1502729866/posts/image/unexpected-ways-in-which-runing-can-affect-your-skin.jpg',
				alt: 'test'
			}}
			titleAttributes={{
				text: 'Lorem ipsum dolor sit ametjkdfjkdldkfdkfj, consectetuer',
				fontSize: 2,
			}}
			subtitleAttributes={{
				text: 'DIY',
				to: '/test',
			}}
		>
			article footer :)
		</ArticleTile>
	));
