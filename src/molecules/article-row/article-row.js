import React from 'react';
import PropTypes from 'prop-types';

import {
	H3,
	Subtitle,
	ArticleImage,
	ArticleImageContainer,
	ArticleDescription,
	ArticleHeader,
	ArticleContainer,
	ArticleBody,
} from 'atoms';

const ArticleRow = ({ title, subtitle, description, children, imageAttributes }) => (
	<ArticleContainer>
		<ArticleBody>
			<ArticleHeader>
				<H3>{title}</H3>
				{subtitle && <Subtitle>{subtitle}</Subtitle>}
			</ArticleHeader>
			{description && (
				<ArticleDescription>
					{description}
				</ArticleDescription>
			)}
			{children && children}
		</ArticleBody>
		{imageAttributes && (
			<ArticleImageContainer>
				<ArticleImage {...imageAttributes} />
			</ArticleImageContainer>
		)}
	</ArticleContainer>
);

ArticleRow.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	description: PropTypes.string,
	children: PropTypes.node,
	imageAttributes: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired
	})
};

ArticleRow.defaultProps = {
	subtitle: null,
	description: null,
	children: null,
	imageAttributes: null
};

export default ArticleRow;
