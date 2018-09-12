import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Section as makeSection, VideoSection as Video } from 'molecules';

const Section = styled(makeSection).attrs({
	content: true,
	centered: true,
	width: '100%',
	px: 3,
	py: 4,
	mx: 'auto'
})`
	& > div {
		width: 100%;
	}
`;

const VideoSection = ({ title, image, description, videoUrl }) => (
	<Section>
		<Video
			titleAttributes={{
				text: title
			}}
			img={(image || {}).secure_url}
			description={description}
			videoUrl={videoUrl}
		/>
	</Section>
);

VideoSection.propTypes = {
	title: PropTypes.string,
	image: PropTypes.shape({
		secure_url: PropTypes.string
	}),
	description: PropTypes.string,
	videoUrl: PropTypes.string
};

export default VideoSection;
