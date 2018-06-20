import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { noStyleLink } from 'styles';
import { Link } from 'react-router-dom';

import {
	H3,
	Subtitle,
	ArticleImage,
	ArticleImageContainer,
	ArticleDescription,
	ArticleHeader,
	ArticleContainer,
	ArticleBody,
	ArticleImageLinkable
} from 'atoms';

const NoStyleLink = styled(Link)`
	${noStyleLink};
`;

const Linkable = ({ children, isLinkable, to }) => isLinkable ?
	<NoStyleLink to={to}>{children}</NoStyleLink> :
	<React.Fragment>{children}</React.Fragment>;

const ImageLinkable = ({ children, isLinkable, to }) => isLinkable ?
	<ArticleImageLinkable to={to}>{children}</ArticleImageLinkable> :
	<React.Fragment>{children}</React.Fragment>;

const ArticleRow = ({ title, subtitle, description, imageAttributes, children, isLinkable, to, ...attrs }) => (
	<ArticleContainer {...attrs}>
		<ArticleBody>
			<Linkable to={to} isLinkable={isLinkable}>
				<ArticleHeader>
					<H3 fontSize={[1, 2]} fontWeight="bold">{title}</H3>
					{subtitle && <Subtitle>{subtitle}</Subtitle>}
				</ArticleHeader>
				{description && (
					<ArticleDescription>
						{description}
					</ArticleDescription>
				)}
			</Linkable>
			{children && children}
		</ArticleBody>
		{imageAttributes && (
			<ImageLinkable to={to} isLinkable={isLinkable}>
				<ArticleImageContainer>
					<ArticleImage {...imageAttributes} />
				</ArticleImageContainer>
			</ImageLinkable>
		)}
	</ArticleContainer>
);

ArticleRow.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	description: PropTypes.string,
	children: PropTypes.node,
	isLinkable: PropTypes.bool,
	to: PropTypes.string,
	imageAttributes: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired
	})
};

ArticleRow.defaultProps = {
	subtitle: null,
	description: null,
	children: null,
	imageAttributes: {},
	isLinkable: false,
	to: null
};

export default ArticleRow;
