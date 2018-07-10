import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
/* eslint-enable import/no-extraneous-dependencies */

import LinkWrapperReadme from './docs/link-wrapper.md';

import LinkWrapper from './link-wrapper';

storiesOf('Atoms/Link Wrapper', module)
	.add('with link', withReadme(LinkWrapperReadme, () => (
		<LinkWrapper to="/test">
			<div>no style link</div>
		</LinkWrapper>
	)))
	.add('with no link', withReadme(LinkWrapperReadme, () => (
		<LinkWrapper>
			<div>simple div</div>
		</LinkWrapper>
	)));
