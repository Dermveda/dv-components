import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import {text, boolean, object} from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import AritcleRowReadme from './docs/article-row.md';
import CardRowReadme from './docs/card-row.md';
import LifestyleReadme from './docs/lifestyle.md';

import RowListing from './row-listing';
import TileFeatured from './tile-featured';
import CardRow from './card-row';
import Lifestyle from './lifestyle';
import TileSmall from './tile-small';

const article = {
	_id: '59ead04ac9ad306351f29a7c',
	title: 'Overview of Philosophy and Approach of Naturopathic Skin Therapies',
	author: 'John Doe',
	to: '/article-link',
	imageAttributes: {
		src: 'https://res.cloudinary.com/dermveda/image/upload/q_auto,f_auto,dpr_auto,w_900,c_limit/v1502729866/posts/image/unexpected-ways-in-which-runing-can-affect-your-skin.jpg',
		alt: 'test'
	},
	subtitle: 'This is a subtitle :)',
	subtitleLink: '/something',
	description: 'Nunc sem nisi, faucibus non magna a, egestas varius dolor. Maecenas metus ex, feugiat ut pulvinar eu, convallis a lectus. Nunc laoreet accumsan tortor nec venenatis. Pellentesque eu mi leo.'
};

storiesOf('Organism/Templates', module)
	.add('card row', withReadme(CardRowReadme, () => (
		<CardRow
			description={text('description', 'Something of a description can go here')}
			headerAttributes={object('headerAttributes', {
				title: 'Article List',
				buttonAttributes: {
					to: '/sdf',
					text: 'Something'
				}
			})}
			showAll={boolean('showAll', false)}
			articles={object('articles', [article, article, article, article, article])}
			footerProps={object('footerProps', ['author', '_id'])}
			renderFooter={({author, _id}) => (
				<div style={{ marginTop: 'auto' }}>
					{author && <p>{author}</p>}
					{_id && <p>{_id}</p>}
				</div>
			)}
		/>
	)))
	.add('Lifestyle', withReadme(LifestyleReadme, () => (
		<Lifestyle
			description={text('description', 'Something of a description can go here')}
			headerAttributes={object('headerAttributes', {
				title: 'Article List',
				buttonAttributes: {
					to: '/sdf',
					text: 'Something'
				}
			})}
			showAll={boolean('showAll', false)}
			articles={object('articles', [article, article, article, article, article])}
			footerProps={object('footerProps', ['author', '_id'])}
			renderFooter={({author, _id}) => (
				<div>
					{author && <p>{author}</p>}
					{_id && <p>{_id}</p>}
				</div>
			)}
		/>
	)))
	.add('row listing', withReadme(AritcleRowReadme, () => (
		<RowListing
			description={text('description', 'Something of a description can go here')}
			headerAttributes={object('headerAttributes', {
				title: 'Article List',
				buttonAttributes: {
					to: '/sdf',
					text: 'Something'
				}
			})}
			showAll={boolean('showAll', false)}
			articles={object('articles', [article, article, article, article, article])}
			footerProps={object('footerProps', ['author', '_id'])}
			renderFooter={({author, _id}) => (
				<div>
					{author && <p>{author}</p>}
					{_id && <p>{_id}</p>}
				</div>
			)}
		/>
	)))
	.add('tile featured', withReadme(AritcleRowReadme, () => (
		<div style={{ width: '66.666667%', padding: '15px' }}>
			<TileFeatured
				description={text('description', 'Something of a description can go here')}
				headerAttributes={object('headerAttributes', {
					title: 'Article List',
					buttonAttributes: {
						to: '/sdf',
						text: 'Something'
					}
				})}
				showAll={boolean('showAll', false)}
				articles={object('articles', [article, article, article, article, article])}
				footerProps={object('footerProps', ['author', '_id'])}
				renderFooter={({author, _id}) => (
					<div>
						{author && <p>{author}</p>}
					</div>
				)}
			/>
		</div>
	)))
	.add('tile small', withReadme(AritcleRowReadme, () => (
		<div style={{ width: '66.666667%' }}>
			<TileSmall
				description={text('description', 'Something of a description can go here')}
				headerAttributes={object('headerAttributes', {
					title: 'Article List',
					buttonAttributes: {
						to: '/sdf',
						text: 'Something'
					}
				})}
				showAll={boolean('showAll', false)}
				articles={object('articles', [article, article, article, article, article])}
				footerProps={object('footerProps', ['author', '_id'])}
				renderFooter={({author, _id}) => (
					<div>
						{author && <p>{author}</p>}
					</div>
				)}
			/>
		</div>

	)))
