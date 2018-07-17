import React from 'react';
import { createSkeletonProvider } from '@trainline/react-skeletor';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { text, object, boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import ArticleRowHeader from './docs/article-row.md';
import ArticleRow from './article-row';
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

storiesOf('Molecules/Article Row', module)
	.addDecorator(withReadme(ArticleRowHeader))
	.add('article row', () => (
		<ArticleRow
			to={text('to', '/asdf')}
			title={text('title', 'Test Title')}
			description={text('description', 'Simple article description')}
			imageAttributes={object('imageAttributes', {
				src: 'https://res.cloudinary.com/dermveda/image/upload/q_auto,f_auto,dpr_auto,w_900,c_limit/v1502729866/posts/image/unexpected-ways-in-which-runing-can-affect-your-skin.jpg',
				alt: 'test'
			})}
		>
			{text('children', 'Fusce rhoncus risus vitae tellus tincidunt, non')}
		</ArticleRow>
	))
	.add('article row listing', () => (
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
	))
	.add('skeleton loading', () => {
		const createSkeletonWrapper = (props) => (
			<ArticleRowList {...props} />
		);

		const makeFakeArticle = index => ({
			_id: index,
			title: '__________ _______',
			subtitle: '_____ ____',
			description: '__________ ________ __________',
			imageAttributes: {
				src: '__________',
				style: { height: 'calc(20vh)', maxHeight: '200px', display: 'block' }
			}
		});

		const SkeletonWrapper = createSkeletonProvider(
			{
				articles: [makeFakeArticle(0), makeFakeArticle(1), makeFakeArticle(2)],
			},
			() => boolean('skeleton loading', true),
			'pending'
		)(createSkeletonWrapper);

		return (
			<SkeletonWrapper
				articles={[article, article, article]}
				footerProps={['author', '_id']}
				renderFooter={({ author, _id }) => (
					<div>
						{author && <p>{author}</p>}
						{_id && <p>{_id}</p>}
					</div>
				)}
			/>
		);
	});
