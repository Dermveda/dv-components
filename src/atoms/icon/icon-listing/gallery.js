import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ type }) => {
	switch (type) {
		// TODO: outline, colored
		default:
			return (
				<g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" fill="#111111" stroke="#111111">
					<rect x="1" y="1" fill="none" stroke="#111111" strokeMiterlimit="10" width="9" height="9" />
					<rect data-color="color-2" x="14" y="1" fill="none" strokeMiterlimit="10" width="9" height="9" />
					<rect data-color="color-2" x="1" y="14" fill="none" strokeMiterlimit="10" width="9" height="9" />
					<rect x="14" y="14" fill="none" stroke="#111111" strokeMiterlimit="10" width="9" height="9" />
				</g>
			);
	}
};
Gallery.propTypes = {
	type: PropTypes.string
};
Gallery.defaultProps = {
	type: 'glyph'
};
export default Gallery;
