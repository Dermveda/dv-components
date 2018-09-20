import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'atoms';

const Message = ({ type, children, ...props }) => {
	if (!children) return null;
	return (
		<Box color={`progressive.${type}.dark`} bg={`progressive.${type}.light`} p={2} textAlign="center" {...props}>
			{children}
		</Box>
	);
};
Message.propTypes = {
	type: PropTypes.string,
	children: PropTypes.object
};
Message.defaultProps = {
	type: 'info'
};
export default Message;
