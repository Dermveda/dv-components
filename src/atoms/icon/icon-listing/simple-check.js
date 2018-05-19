import React from 'react';
import PropTypes from 'prop-types';

const SimpleCheck = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<path fill="#72C472" d="M18,39c-0.25586,0-0.51172-0.09766-0.70703-0.29297l-14-14c-0.39062-0.39062-0.39062-1.02344,0-1.41406 s1.02344-0.39062,1.41406,0L18,36.58594l25.29297-25.29297c0.39062-0.39062,1.02344-0.39062,1.41406,0s0.39062,1.02344,0,1.41406 l-26,26C18.51172,38.90234,18.25586,39,18,39z" />
				</g>
			);
		case 'outline':
			return (
				<g fill="currentColor">
					<polyline fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="4,24 18,38 44,12 " strokeLinejoin="miter" />
				</g>
			);
		default:
			return (
				<g fill="currentColor">
					<path fill="currentColor" d="M18,40c-0.512,0-1.023-0.195-1.414-0.586L1.172,24L4,21.171l14,14l26-26L46.828,12L19.414,39.414 C19.023,39.805,18.512,40,18,40z" />
				</g>
			);
	}
};

SimpleCheck.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline']),
};

SimpleCheck.defaultProps = {
	type: 'glyph'
};

export default SimpleCheck;
