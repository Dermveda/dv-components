import React from 'react';
import PropTypes from 'prop-types';

const CircleCheck = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g fill="#e3e2e2">
					<circle cx="50%" cy="50%" r="50%" />
				</g>
			);
		// TODO: add outline type
		default:
			return (
				<g fill="currentColor">
					<circle cx="50%" cy="50%" r="50%" />
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
