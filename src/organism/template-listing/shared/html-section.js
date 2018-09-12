import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'molecules';

const HtmlSection = ({ content, title, showTitle }) => {
	return (
		<Section content centered title={showTitle ? title : undefined}>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</Section>
	);
};

HtmlSection.propTypes = {
	content: PropTypes.string.isRequired,
	showTitle: PropTypes.bool,
	title: PropTypes.string
};

export default HtmlSection;
