import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, isSuccess, isInfo, boldText }) => {
	return (
		<div>
			{message ? (
				<div className={`mt-2 alert alert-${isInfo ? 'info' : isSuccess ? 'success' : 'danger'}`} role="alert">
					{!isInfo ? <strong>{boldText ? boldText : ''} </strong> : null}
					{message}
				</div>
			) : null}
		</div>
	);
};
Message.propTypes = {
	message: PropTypes.string,
	isSuccess: PropTypes.bool,
	isInfo: PropTypes.bool,
	boldText: PropTypes.str
};
export default Message;
