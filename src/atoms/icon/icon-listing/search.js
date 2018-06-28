import React from 'react';
import PropTypes from 'prop-types';

const BookStack = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<path d="M44,46c-0.51172,0-1.02344-0.19531-1.41406-0.58594L31.31348,34.14209&#xA;&#x9;c-0.78125-0.78076-0.78125-2.04736,0-2.82812c0.78125-0.78125,2.04688-0.78125,2.82812,0l11.27246,11.27197&#xA;&#x9;c0.78125,0.78076,0.78125,2.04736,0,2.82812C45.02344,45.80469,44.51172,46,44,46z" fill="#223E49"/>
					<circle cx="20" cy="20" fill="#BADEFC" r="18"/>
					<path d="M20,39C9.52344,39,1,30.47656,1,20S9.52344,1,20,1s19,8.52344,19,19S30.47656,39,20,39z M20,3&#xA;&#x9;C10.62598,3,3,10.62598,3,20s7.62598,17,17,17s17-7.62598,17-17S29.37402,3,20,3z" fill="#5A7A84"/>
				</g>
			);
		case 'outline':
			return (
				<g stroke="currentColor" strokeLinecap="square">
					<line fill="none" x1="44" x2="32.7" y1="44" y2="32.7"/>
					<circle cx="20" cy="20" fill="none" r="18" stroke="currentColor"/>
				</g>
			);
		default:
			return (
				<g fill="currentColor">
					<path d="M37.189,34.361c-0.851,1.03-1.799,1.977-2.828,2.828L44,46.829L46.828,44L37.189,34.361z"/>
					<path d="M21,40C10.523,40,2,31.477,2,21S10.523,2,21,2s19,8.523,19,19S31.477,40,21,40z M21,4&#xA;&#x9;C11.626,4,4,11.626,4,21s7.626,17,17,17s17-7.626,17-17S30.374,4,21,4z" fill="currentColor"/>
				</g>
			);
	}
};

BookStack.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline']),
};

BookStack.defaultProps = {
	type: 'glyph'
};

export default BookStack;
