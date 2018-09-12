import React from 'react';
import PropTypes from 'prop-types';
import { CircleSection } from 'molecules';
import { Hideout } from 'img';

const CircleMessage = ({ description, title }) => (
	<CircleSection
		content
		centered
		mt={4}
		bg="gray.light"
		backgroundImage={{
			url: Hideout,
			pattern: true,
			size: '70px'
		}}
		circleAttributes={{
			text: title,
			bg: 'white'
		}}>
		{description}
	</CircleSection>
);

CircleMessage.propTypes = {
	description: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default CircleMessage;
