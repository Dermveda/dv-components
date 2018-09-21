import React from 'react';
import PropTypes from 'prop-types';
import { ImageGrid as ImgGrid, Section } from 'molecules';

const ImageGrid = ({ messageText, title, image, imageAlt }) => (
	<ImgGrid imageAttributes={{ src: (image || {}).secure_url, alt: imageAlt }} direction="right" content centered>
		<Section
			display="block"
			p="0px !important"
			maxWidth="600px"
			title={title}
			titleAttributes={{
				fontSize: [2, 3],
				textAlign: 'left',
				lineHeight: 1.25
			}}>
			{messageText}
		</Section>
	</ImgGrid>
);

ImageGrid.propTypes = {
	messageText: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.shape({
		secure_url: PropTypes.string
	}),
	imageAlt: PropTypes.string
};

export default ImageGrid;
