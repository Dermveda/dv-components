import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable import/no-extraneous-dependencies */

import ArticleRowList from './article-row-list';

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

storiesOf('Molecules/Article Row Listing', module)
	.add('listing of article rows', () => (
		<ArticleRowList
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
