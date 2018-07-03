import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LinkWrapper } from 'atoms';
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
	display: flex;
	flex-direction: column;
`;

const Linkable = ({ children, isLinkable, to }) => isLinkable ?
	<NoStyleLink to={to}>{children}</NoStyleLink> :
	<React.Fragment>{children}</React.Fragment>;

const ImageLinkable = ({ children, isLinkable, to }) => isLinkable ?
	<ArticleImageLinkable to={to}>{children}</ArticleImageLinkable> :
	<React.Fragment>{children}</React.Fragment>;

const ArticleRow = ({ title, subtitle, description, imageAttributes, children, isLinkable, subtitleLink, to, ...attrs }) => (
	<ArticleContainer {...attrs}>
		<ArticleBody>
			<ArticleHeader>
				{title && (
					<LinkWrapper to={to}>
						<H3 fontSize={[1, 2]} fontWeight="bold">
							{title}
						</H3>
					</LinkWrapper>
				)}
				{subtitle && (
					<LinkWrapper to={subtitleLink}>
						<Subtitle is="div">
							{subtitle}
						</Subtitle>
					</LinkWrapper>
				)}
			</ArticleHeader>
			<Linkable to={to} isLinkable={isLinkable}>
				{description && (
					<ArticleDescription>
						{
							description.includes('<p>') ?
								<div dangerouslySetInnerHTML={{__html: description}} /> : description
						}
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
