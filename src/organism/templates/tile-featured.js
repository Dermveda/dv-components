import React from 'react';
import {
	ArticleListHeader,
	Section,
	ArticleRowList
} from 'molecules';

const TileFeatured = ({ articles, renderFooter, footerProps, headerAttributes, ...props }) => (
	<Section centered content {...props} buttonAttributes={{
		...headerAttributes.buttonAttributes,
		noButtonSpacing: true,
		buttonLeft: false,
		nostyle: true,
		small: true,
		type: 'primary'
	}}>
		<ArticleListHeader {...headerAttributes} />
		<ArticleRowList
			articles={articles}
			renderFooter={renderFooter}
			footerProps={footerProps}
		/>
	</Section>
);

export default TileFeatured;
