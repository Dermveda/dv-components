import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	H3,
	LinkWrapper,
	Subtitle,
	SmallArticleImage,
	SmallArticleImageContainer,
	ArticleDescription as ArticleFooter,
	ArticleHeader,
	SmallArticleContainer,
	SmallArticleBody
} from 'atoms';
import { renderFooter as buildFooter } from 'utils';

export default class ArticleCardSmall extends Component {
	static propTypes = {
		article: PropTypes.shape({
			title: PropTypes.string.isRequired,
			subtitle: PropTypes.string,
			subtitleLink: PropTypes.string,
			description: PropTypes.string,
			children: PropTypes.node,
			to: PropTypes.string,
			imageAttributes: PropTypes.shape({
				src: PropTypes.string.isRequired,
				alt: PropTypes.string.isRequired,
				isLeft: PropTypes.bool
			})
		}),
		renderFooter: PropTypes.func,
		footerProps: PropTypes.array
	};

	renderTitle = ({ article: { to, title } = {} }) => (
		<LinkWrapper to={to}>
			<H3 fontSize={[1, 2, 2]} fontWeight="bold" mb={0}>
				{title}
			</H3>
		</LinkWrapper>
	);

	renderSubtitle = ({ article: { subtitleLink, subtitle } = {} }) => (
		<LinkWrapper to={subtitleLink}>
			<Subtitle fontSize={[0, 1, 1]} is="div">
				{subtitle}
			</Subtitle>
		</LinkWrapper>
	);

	renderImage = ({ article: { imageAttributes, to } = {} }) => {
		return (
			<LinkWrapper to={to}>
				<SmallArticleImageContainer>
					<SmallArticleImage {...imageAttributes} />
				</SmallArticleImageContainer>
			</LinkWrapper>
		);
	};

	renderFooterSection = ({ footerProps, article, renderFooter }) => {
		if (!renderFooter || !footerProps) return null;
		return <ArticleFooter>{buildFooter(footerProps, article, renderFooter)}</ArticleFooter>;
	};

	render = () => {
		const { article: { title, subtitle } = {}, renderFooter, footerProps, ...attrs } = this.props;

		return (
			<SmallArticleContainer {...attrs}>
				{this.renderImage(this.props)}
				<SmallArticleBody>
					<ArticleHeader>
						{title && this.renderTitle(this.props)}
						{subtitle && this.renderSubtitle(this.props)}
					</ArticleHeader>
					{this.renderFooterSection(this.props)}
				</SmallArticleBody>
			</SmallArticleContainer>
		);
	};
}
