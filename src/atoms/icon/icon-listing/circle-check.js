import React from 'react';
import PropTypes from 'prop-types';

const CircleCheck = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g fill="#3dc156">
					<path
						fill="#3dc156"
						d="M24,1C11.3,1,1,11.3,1,24s10.3,23,23,23s23-10.3,23-23S36.7,1,24,1z M36.7,16.7l-16,16 C20.5,32.9,20.3,33,20,33s-0.5-0.1-0.7-0.3l-8-8c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l7.3,7.3l15.3-15.3c0.4-0.4,1-0.4,1.4,0 S37.1,16.3,36.7,16.7z"
					/>
				</g>
			);
		// TODO: add outline type
		default:
			return (
				<g>
					<path
						fill="currentColor"
						d="M24,1C11.3,1,1,11.3,1,24s10.3,23,23,23s23-10.3,23-23S36.7,1,24,1z M36.7,16.7l-16,16 C20.5,32.9,20.3,33,20,33s-0.5-0.1-0.7-0.3l-8-8c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l7.3,7.3l15.3-15.3c0.4-0.4,1-0.4,1.4,0 S37.1,16.3,36.7,16.7z"
					/>
				</g>
			);
	}
};
CircleCheck.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph'])
};
CircleCheck.defaultProps = {
	type: 'colored'
};
export default CircleCheck;
