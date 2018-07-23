import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
/* eslint-enable import/no-extraneous-dependencies */

import VideoReadme from './docs/video-section.md';
import VideoSection from './video-section';

storiesOf('Molecules/Video Section', module)
	.addDecorator(withReadme(VideoReadme))
	.add('simple video section', () => (
		<VideoSection
			titleAttributes={object('titleAttributes', {
				text: 'Watch the Video',
				is: 'h2'
			})}
			img={text('img', 'http://fillmurray.com/100/100')}
			description={text('description', 'Or learn how the whole process works')}
			videoUrl={text('videoUrl', 'https://www.youtube.com/embed/IWns8-YQVko?rel=0&amp;showinfo=0&autoplay=1')}
		/>
	));
