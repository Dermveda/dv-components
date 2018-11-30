import React from 'react';
import PropTypes from 'prop-types';

const Plus = ({ type }) => {
	switch (type) {
		// case 'colored':
		// 	return (
		// 	);
		// case 'outline':
		// 	return (
		// 	);
		default:
			return (
				<g fill="currentColor">
					<path fill="currentColor" d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z" />
				</g>
			);
	}
};

Plus.propTypes = {
	type: PropTypes.string
};

Plus.defaultProps = {
	type: 'glyph'
};

export default Plus;
