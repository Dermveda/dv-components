import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import ArticleRow from './article-row';

storiesOf('Molecules/Article Row', module)
	.addDecorator(checkA11y)
	.addDecorator(withKnobs)
	.add('simple input', () => (
		<ArticleRow />
	));
