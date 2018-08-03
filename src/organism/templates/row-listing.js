import React from 'react';
import PropTypes from 'prop-types';
import { Content } from 'atoms';
import { ArticleListHeader, Section, ArticleRowList } from 'molecules';

const TileFeatured = ({
	articles, description, renderFooter, footerProps, headerAttributes, ...props
}) => {
	const buttonAttributes = headerAttributes ? {
		...headerAttributes.buttonAttributes,
		noButtonSpacing: true,
		buttonLeft: false,
		nostyle: true,
		small: true,
		type: 'primary'
	} : undefined;

	return (
		<Section centered content {...props} buttonAttributes={buttonAttributes}>
			{headerAttributes && (<ArticleListHeader {...headerAttributes} />)}
			{description && <Content mt={3} mb={2}>{description}</Content>}
			<ArticleRowList
				articles={articles}
				renderFooter={renderFooter}
				footerProps={footerProps}
			/>
		</Section>
	);
};

TileFeatured.propTypes = {
	articles: PropTypes.arrayOf(PropTypes.shape({
		imageAttributes: PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired
		}),
		to: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		subtitleLink: PropTypes.string,
		subtitle: PropTypes.string
	})),
	renderFooter: PropTypes.func,
	headerAttributes: PropTypes.shape({
		title: PropTypes.string,
		buttonAttributes: PropTypes.shape({
			text: PropTypes.string.isRequired
		})
	}),
	description: PropTypes.string,
	footerProps: PropTypes.arrayOf(PropTypes.string)
};

TileFeatured.defaultProps = {
	renderFooter: () => {},
	footerProps: [],
	description: null,
	headerAttributes: null
};

export default TileFeatured;
