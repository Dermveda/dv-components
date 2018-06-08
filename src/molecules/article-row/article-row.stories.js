import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable import/no-extraneous-dependencies */

import ArticleRow from './article-row';

storiesOf('Molecules/Article Row', module)
	.add('simple input', () => (
		<ArticleRow
			title="Test Title"
			description="Curabitur ac tincidunt odio, scelerisque gravida magna. Pellentesque placerat placerat ultricies. Mauris dictum libero nunc, ac efficitur nisi rutrum nec."
			imageAttributes={{ src: 'http://fillmurray.com/1280/720', alt: 'test' }}
		>
			Fusce rhoncus risus vitae tellus tincidunt, non faucibus leo fermentum. Etiam sit amet mauris ac est maximus euismod. Nam vel iaculis leo, sed vestibulum massa. Donec ipsum enim, dapibus sit amet ultrices eget, facilisis a orci.
		</ArticleRow>
	));
