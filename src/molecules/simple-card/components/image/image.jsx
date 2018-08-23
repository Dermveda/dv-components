import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Img = styled.img`
	max-height: 100px;
	width: auto;
`;

const Image = ({ item = {}, attrs }) => {
	const { imageAttributes: { src, alt, attrs: imgAttrs } = {} } = item;
	if (!src) return null;
	return (
		<ImageContainer {...attrs}>
			<Img src={src} alt={alt || item.title} {...imgAttrs} />
		</ImageContainer>
	);
};
Image.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string,
		imageAttributes: PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string,
			attrs: PropTypes.object
		})
	}),
	attrs: PropTypes.object
};
export default Image;
