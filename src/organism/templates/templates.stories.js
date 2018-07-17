import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import TileFeatured from './tile-featured';
import CardRow from './card-row';
import Lifestyle from './lifestyle';

const article = {
	_id: '59ead04ac9ad306351f29a7c',
	title: 'Overview of Philosophy and Approach of Naturopathic Skin Therapies',
	author: 'John Doe',
	to:'/article-link',
	imageAttributes: {
		src: 'https://res.cloudinary.com/dermveda/image/upload/q_auto,f_auto,dpr_auto,w_900,c_limit/v1502729866/posts/image/unexpected-ways-in-which-runing-can-affect-your-skin.jpg',
		alt: 'test'
	},
	subtitle: 'This is a subtitle :)',
	subtitleLink: '/something',
	description: 'Nunc sem nisi, faucibus non magna a, egestas varius dolor. Maecenas metus ex, feugiat ut pulvinar eu, convallis a lectus. Nunc laoreet accumsan tortor nec venenatis. Pellentesque eu mi leo.'
};

storiesOf('Organism/Templates', module)
	.add('card row', () => (
		<CardRow
			description={text('description', 'Something of a description can go here')}
			headerAttributes={{
				title: 'Article List'
			}}
			showAll={boolean('showAll', false)}
			articles={[article, article, article, article, article]}
			footerProps={['author', '_id']}
			renderFooter={({ author, _id }) => (
				<div>
					{author && <p>{author}</p>}
					{_id && <p>{_id}</p>}
				</div>
			)}
		/>
	))
	.add('Lifestyle', () => (
		<Lifestyle
			headerAttributes={{
				buttonAttributes: {
					to: '/sdf',
					text: 'Something'
				},
				title: 'Article List'
			}}
			showAll={boolean('showAll', false)}
			description={text('description', 'Nunc luctus neque et dolor dignissim scelerisque. In vitae porttitor lorem, ac vestibulum eros. Curabitur ac condimentum eros.')}
			articles={[article, article, article, article, article]}
			footerProps={['author', '_id']}
			renderFooter={({ author, _id }) => (
				<div>
					{author && <p>{author}</p>}
					{_id && <p>{_id}</p>}
				</div>
			)}
		/>
	))
	.add('tile featured', () => (
		<TileFeatured
			description={text('description', 'Something of a description can go here')}
			headerAttributes={{
				buttonAttributes: {
					to: '/sdf',
					text: 'Something'
				},
				title: 'Article List'
			}}
			articles={[article, article, article]}
			footerProps={['author', '_id']}
			renderFooter={({ author, _id }) => (
				<div>
					{author && <p>{author}</p>}
					{_id && <p>{_id}</p>}
				</div>
			)}
		/>
	));
