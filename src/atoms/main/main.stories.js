import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
/* eslint-enable import/no-extraneous-dependencies */

import MainReadme from './docs/main.md';
import Main from './main';

storiesOf('Atoms/Main', module)
	.addDecorator(withReadme(MainReadme))
	.add('main container', () => (
		<Main>
			<div>I am part of the main content</div>
		</Main>
	));
