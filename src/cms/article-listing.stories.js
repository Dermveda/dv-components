import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import { FlexBox } from 'atoms';
import { RowListing, CardRow, Lifestyle } from '../organism';

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

storiesOf('CMS/Tag', module)
	.add('tile-featured', () => (
		<RowListing
			description={text('description', 'Something of a description can go here (optional)')}
			headerAttributes={{
				title: text('Title', 'Background'),
				buttonAttributes: {
					to: '/',
					text: text('Button Text', 'More Ayurveda Background')
				}
			}}
			articles={[article, article, article, article, article]}
			footerProps={['author']}
			renderFooter={(({ author }) => (
				<FlexBox
					display="flex"
					flexDirection="flex"
					flexWrap="nowrap"
					justifyContent="space-between"
					alignItems="center"
					width="100%"
				>
					{author}
				</FlexBox>
			))}
		/>
	))
	.add('tile-small', () => (
		<RowListing
			description={text('description', 'Something of a description can go here (optional)')}
			headerAttributes={{
				title: text('Title', 'Background'),
				buttonAttributes: {
					to: '/',
					text: text('Button Text', 'More Ayurveda Background')
				}
			}}
			articles={[article, article, article, article, article]}
			footerProps={['author']}
			renderFooter={(({ author }) => (
				<FlexBox
					display="flex"
					flexDirection="flex"
					flexWrap="nowrap"
					justifyContent="space-between"
					alignItems="center"
					width="100%"
				>
					{author}
				</FlexBox>
			))}
		/>
	))
	.add('row-listing', () => (
		<RowListing
			description={text('description', 'Something of a description can go here (optional)')}
			headerAttributes={{
				title: text('Title', 'Background'),
				buttonAttributes: {
					to: '/',
					text: text('Button Text', 'More Ayurveda Background')
				}
			}}
			articles={[article, article, article, article, article]}
			footerProps={['author']}
			renderFooter={(({ author }) => (
				<FlexBox
					display="flex"
					flexDirection="flex"
					flexWrap="nowrap"
					justifyContent="space-between"
					alignItems="center"
					width="100%"
				>
					{author}
				</FlexBox>
			))}
		/>
	))
	.add('card-row', () => (
		<CardRow
			description={text('description', 'Something of a description can go here (optional)')}
			headerAttributes={{
				title: text('Title', 'Background'),
				buttonAttributes: {
					to: '/',
					text: text('Button Text', 'More Ayurveda Background')
				}
			}}
			articles={[article, article, article, article, article]}
			footerProps={['author']}
			renderFooter={(({ author }) => (
				<FlexBox
					display="flex"
					flexDirection="flex"
					flexWrap="nowrap"
					justifyContent="space-between"
					alignItems="center"
					width="100%"
				>
					{author}
				</FlexBox>
			))}
		/>
	))
	.add('lifestyle', () => (
		<Lifestyle
			description={text('description', 'Something of a description can go here (optional)')}
			headerAttributes={{
				title: text('Title', 'Background'),
				buttonAttributes: {
					to: '/',
					text: text('Button Text', 'More Ayurveda Background')
				}
			}}
			articles={[article, article, article, article, article]}
			footerProps={['author']}
			renderFooter={(({ author }) => (
				<FlexBox
					display="flex"
					flexDirection="flex"
					flexWrap="nowrap"
					justifyContent="space-between"
					alignItems="center"
					width="100%"
				>
					{author}
				</FlexBox>
			))}
		/>
	))
