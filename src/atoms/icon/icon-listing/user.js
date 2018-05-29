import React from 'react';
import PropTypes from 'prop-types';

const SimpleCheck = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<rect x="18" y="22" fill="#EAC3A2" width="12" height="15" />
					<path fill="#EAD8C5" d="M24,28c-6.0654297,0-11-4.9345703-11-11v-4c0-6.0654297,4.9345703-11,11-11s11,4.9345703,11,11v4 C35,23.0654297,30.0654297,28,24,28z" />
					<path fillRule="evenodd" clipRule="evenodd" fill="#E86C60" d="M43.2495117,37.7966309L30,32h-0.0181885 C28.3123779,33.2503662,26.2462769,34,24,34s-4.3123169-0.7496338-5.9817505-2H18l-0.124939,0.062439l-13.12146,5.7341919 C3.2328491,38.4612427,2,40.3496704,2,42.0092163v2.987854C2,45.5509644,2.4498291,46,3.001709,46h41.9966431 C45.5515747,46,46,45.5621338,46,44.9970703v-2.987854C46,40.34729,44.7710571,38.4623413,43.2495117,37.7966309z" />
				</g>
			);
		case 'outline':
			return (
				<g fill="currentColor">
					<path data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M30,30H18 c-6.627,0-12,5.373-12,12v2c0,0,6.25,2,18,2s18-2,18-2v-2C42,35.373,36.627,30,30,30z" strokeLinejoin="miter" />
					<path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M14,12 c0-5.523,4.477-10,10-10s10,4.477,10,10s-4.477,12-10,12S14,17.523,14,12z" strokeLinejoin="miter" />
				</g>
			);
		default:
			return (
				<g fill="currentColor">
					<path data-color="color-2" fill="currentColor" d="M30,29H18c-7.168,0-13,5.832-13,13v2c0,0.435,0.281,0.82,0.695,0.953 C5.957,45.036,12.229,47,24,47s18.043-1.964,18.305-2.047C42.719,44.82,43,44.435,43,44v-2C43,34.832,37.168,29,30,29z" />
					<path fill="currentColor" d="M24,25c6.195,0,11-6.988,11-13c0-6.065-4.935-11-11-11S13,5.935,13,12C13,18.012,17.805,25,24,25z" />
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
