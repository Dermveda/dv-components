import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'molecules';

const SmallMessage = ({ messageText }) => (
	<Section content centered textAlign="center">
		<div style={{ textAlign: 'center' }}>
			<small>{messageText}</small>
		</div>
	</Section>
);

SmallMessage.propTypes = {
	messageText: PropTypes.string
};

export default SmallMessage;
