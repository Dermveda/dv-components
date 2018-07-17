import React from 'react';
import { createSkeletonProvider } from '@trainline/react-skeletor';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { text, object, boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import ArticleListHeaderReadme from './docs/article-list-header.md';
import ArticleListHeader from './article-list-header';

storiesOf('Molecules/Listing Header', module)
	.addDecorator(withReadme(ArticleListHeaderReadme))
	.add('article header', () => (
		<ArticleListHeader
			title={text('title', 'Test Title')}
			buttonAttributes={object('buttonAttributes', {
				text: 'Read More',
				to: '/'
			})}
		/>
	))
	.add('skeleton loading', () => {
		const createSkeletonWrapper = (props) => (
			<ArticleListHeader {...props} />
		);

		const SkeletonWrapper = createSkeletonProvider(
			{
				title: '_________',
				buttonAttributes: {
					text: '________',
					to: '__'
				}
			},
			() => boolean('skeleton loading', true),
			'pending'
		)(createSkeletonWrapper);

		return (
			<SkeletonWrapper
				title={text('title', 'Test Title')}
				buttonAttributes={object('buttonAttributes', {
					text: 'Read More',
					to: '/'
				})}
			/>
		);
	});
