import React from 'react';
import PropTypes from 'prop-types';

const VideoLibrary = ({ type }) => {
	switch (type) {
		// TODO: colored, outline
		default:
			return (
				<g fill="currentColor">
					<path d="M8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12zm32-8H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM24 29V11l12 9-12 9z" />
				</g>
			);
	}
};
VideoLibrary.propTypes = {
	type: PropTypes.string
};
export default VideoLibrary;
