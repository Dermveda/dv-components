import React from 'react';
import { Content } from 'atoms';
import { ArticleListHeader, Section, ArticleRowList } from 'molecules';

const TileFeatured = ({
	articles, description, renderFooter, footerProps, headerAttributes, ...props
}) => (
	<Section centered content {...props} buttonAttributes={{
		...headerAttributes.buttonAttributes,
		noButtonSpacing: true,
		buttonLeft: false,
		nostyle: true,
		small: true,
		type: 'primary'
	}}>
		{headerAttributes && (<ArticleListHeader {...headerAttributes} />)}
		{description && <Content mt={3} mb={2}>{description}</Content>}
		<ArticleRowList
			articles={articles}
			renderFooter={renderFooter}
			footerProps={footerProps}
		/>
	</Section>
);

export default TileFeatured;
