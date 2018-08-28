import React from 'react';
import PropTypes from 'prop-types';
import { createSkeletonElement } from '@trainline/react-skeletor';
import styled from 'styled-components';

const makeImageContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 8px;
`;

const ImageContainer = createSkeletonElement(makeImageContainer);

const makeImg = styled.img`
	height: 100px;
	width: auto;
`;

const Img = createSkeletonElement(makeImg);

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
