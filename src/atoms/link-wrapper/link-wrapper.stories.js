import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
/* eslint-enable import/no-extraneous-dependencies */

import LinkWrapperReadme from './docs/link-wrapper.md';

import LinkWrapper from './link-wrapper';

storiesOf('Atoms/Link Wrapper', module)
	.addDecorator(withReadme(LinkWrapperReadme))
	.add('with internal link', () => (
		<LinkWrapper to="/test">
			<div>no style link</div>
		</LinkWrapper>
	))
	.add('with external link', () => (
		<LinkWrapper href="http://google.com">
			<div>no style link</div>
		</LinkWrapper>
	))
	.add('with no link', () => (
		<LinkWrapper>
			<div>simple div</div>
		</LinkWrapper>
	));
