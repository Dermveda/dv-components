import React from 'react';
import PropTypes from 'prop-types';
import { H3 } from 'atoms';
import { Section } from 'molecules';
import { Hideout } from 'img';

const Message = ({ messageText }) => (
	<Section
		display="flex"
		content
		centered
		bg="gray.light"
		backgroundImage={{
			url: Hideout,
			pattern: true,
			size: '70px'
		}}>
		<H3 style={{ fontWeight: 600, maxWidth: '800px', textAlign: 'center' }}>{messageText}</H3>
	</Section>
);

Message.propTypes = {
	messageText: PropTypes.string.isRequired
};

export default Message;
