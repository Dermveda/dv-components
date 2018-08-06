import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */
import btoa from 'btoa';
import { ImageGrid, Section } from '../molecules';

storiesOf('CMS/Image Section', module)
	.add('simple image section', () => (
		<ImageGrid
			imageAttributes={{
				src: 'http://fillmurray.com/500/500',
				alt: text('Image Alt', 'This is anexample of the image alt')
			}}
			direction="right"
			content
			centered
		>
			<Section
				display="block"
				p="0px !important"
				maxWidth="600px"
				title={text('Title', 'Simple title and everything')}
				titleAttributes={{
					fontSize: [2, 3],
					textAlign: 'left',
					lineHeight: 1.25
				}}
			>
				{text('Message Text', 'I am a simple image grid and tons of stuff.')}
			</Section>
		</ImageGrid>
	));
