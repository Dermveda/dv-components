import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable import/no-extraneous-dependencies */

import ArticleListHeader from './article-list-header';

storiesOf('Molecules/Article List Header', module)
	.add('article header', () => (
		<ArticleListHeader
			title="test"
			buttonAttributes={{
				text: 'asdfad',
				to: '/'
			}}
		/>
	));
