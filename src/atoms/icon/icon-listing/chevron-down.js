import React from 'react';
import PropTypes from 'prop-types';

const ChevronDown = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<path fill="#C19F85" d="M42.58594,12.58594L24,31.17139L5.41406,12.58594l-2.82812,2.82812l20,20 C22.97656,35.80469,23.48828,36,24,36s1.02344-0.19531,1.41406-0.58594l20-20L42.58594,12.58594z" />
				</g>
			);
		case 'outline':
			return (
				<g fill="currentColor">
					<polyline fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" points="4,14 24,34 44,14 " strokeLinejoin="miter" />
				</g>
			);
		default:
			return (
				<g fill="currentColor">
					<path fill="currentColor" d="M24,36c-0.512,0-1.023-0.195-1.414-0.586L1.172,14L4,11.171l20,20l20-20L46.828,14L25.414,35.414 C25.023,35.805,24.512,36,24,36z" />
				</g>
			);
	}
};

ChevronDown.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline']),
};

ChevronDown.defaultProps = {
	type: 'glyph'
};

export default ChevronDown;
