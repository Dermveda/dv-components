import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ heading, message, isSuccess, isInfo }) => {
	return (
		<div>
			{message ? (
				<div className={`mt-2 alert alert-${isInfo ? 'info' : isSuccess ? 'success' : 'danger'}`} role="alert">
					{!isInfo ? <strong>{heading ? heading : isSuccess ? 'Awesome!' : 'Oops!'} </strong> : null}
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
	heading: PropTypes.string
};
export default Message;
