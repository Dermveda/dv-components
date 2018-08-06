import React from 'react';
import styled from 'styled-components';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import { Section, VideoSection } from '../molecules';

const Container = styled(Section).attrs({
	content: true,
	centered: true,
	maxWidth: '760px',
	width: '100%',
	px: 3,
	py: 4,
	mx: 'auto'
})`
	& > div {
		width: 100%;
	}
`;

storiesOf('CMS/Video Player', module)
	.add('simple input', () => (
		<Container>
			<VideoSection
				titleAttributes={{
					text: text('Title', 'I am a video')
				}}
				img="http://fillmurray.com/100/100"
				description={text('Description', 'I do descriptions')}
				videoUrl={text('Video Url', 'https://www.youtube.com/embed/sOnqjkJTMaA?autoplay=1')}
			/>
		</Container>
	));
