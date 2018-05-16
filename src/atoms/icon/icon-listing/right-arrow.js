import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<path fill="#EFD358" d="M31.41406,8.58594l-2.82812,2.82812L39.17188,22H5c-0.55228,0-1,0.44772-1,1v2c0,0.55228,0.44772,1,1,1 h34.17188L28.58594,36.58594l2.82812,2.82812l14-14c0.78096-0.78097,0.78096-2.04716,0-2.82812L31.41406,8.58594z" />
				</g>
			);
		case 'outline':
			return (
				<g>
					<line data-cap="butt" data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" x1="2" y1="24" x2="45" y2="24" strokeLinejoin="miter" strokeLinecap="butt" />
					<polyline fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="31,10 45,24 31,38 " strokeLinejoin="miter" />
				</g>
			);
		default:
			return (
				<g fill="currentColor">
					<path d="M31,7.171L28.172,10l12,12H1v4h39.172l-12,12L31,40.829l15.414-15.415c0.781-0.781,0.781-2.047,0-2.828 L31,7.171z" />
				</g>
			);
	}
};

RightArrow.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline']),
};

RightArrow.defaultProps = {
	type: 'glyph',
	size: 48,
	className: '',
	color: '#111'
};

export default RightArrow;
