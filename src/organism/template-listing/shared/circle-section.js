import React from 'react';
import PropTypes from 'prop-types';
import { CircleSection } from 'molecules';

const CircleMessage = ({ description, title }) => (
	<CircleSection
		content
		centered
		mt={4}
		type="gray"
		circleAttributes={{
			text: title,
			bg: 'primary.main'
		}}>
		{description}
	</CircleSection>
);

CircleMessage.propTypes = {
	description: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default CircleMessage;
