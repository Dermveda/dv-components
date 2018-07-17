import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	H3,
	LinkWrapper,
	Subtitle,
	ArticleImage,
	ArticleImageContainer,
	ArticleDescription,
	ArticleHeader,
	ArticleContainer,
	ArticleBody
} from 'atoms';

export default class ArticleRow extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.string,
		subtitleLink: PropTypes.string,
		description: PropTypes.string,
		children: PropTypes.node,
		to: PropTypes.string,
		imageAttributes: PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired
		})
	}

	static defaultProps = {
		subtitle: null,
		description: null,
		children: null,
		imageAttributes: {},
		to: null
	}

	renderTitle = ({ to, title }) => (
		<LinkWrapper to={to}>
			<H3 fontSize={[1, 2]} fontWeight="bold">
				{title}
			</H3>
		</LinkWrapper>
	)

	renderSubtitle = ({ subtitleLink, subtitle }) => (
		<LinkWrapper to={subtitleLink}>
			<Subtitle is="div">
				{subtitle}
			</Subtitle>
		</LinkWrapper>
	)

	renderImage = ({ imageAttributes, to }) => (
		<LinkWrapper to={to}>
			<ArticleImageContainer>
				<ArticleImage {...imageAttributes} />
			</ArticleImageContainer>
		</LinkWrapper>
	)

	renderDescription = ({ to, description }) => (
		<LinkWrapper to={to}>
			<ArticleDescription>
				<div dangerouslySetInnerHTML={{__html: description}} />
			</ArticleDescription>
		</LinkWrapper>
	)

	render = () => {
		const {
			title, subtitle, description, imageAttributes, children, subtitleLink, to, ...attrs
		} = this.props;
		return (
			<ArticleContainer {...attrs}>
				<ArticleBody>
					<ArticleHeader>
						{title && this.renderTitle(this.props)}
						{subtitle && this.renderSubtitle(this.props)}
					</ArticleHeader>
					{description && this.renderDescription(this.props)}
					{children && children}
				</ArticleBody>
				{imageAttributes && this.renderImage(this.props)}
			</ArticleContainer>
		);
	}
}
