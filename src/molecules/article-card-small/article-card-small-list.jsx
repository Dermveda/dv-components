import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArticleCardSmall from './article-card-small.jsx';

const ArticleCardSmListContainer = styled('div')`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

export default class ArticleCardSmList extends Component {
	static propTypes = {
		articles: PropTypes.arrayOf(
			PropTypes.shape({
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
			})
		).isRequired,
		renderFooter: PropTypes.func,
		footerProps: PropTypes.array
	};

	renderArticleCardSmall = article => (
		<ArticleCardSmall
			mx={[0, 2, 3]}
			my={[2, 2, 3]}
			key={`article-card-sm-row-${article._id}`}
			article={article}
			renderFooter={this.props.renderFooter}
			footerProps={this.props.footerProps}
		/>
	);

	render() {
		return <ArticleCardSmListContainer>{this.props.articles.map(article => this.renderArticleCardSmall(article))}</ArticleCardSmListContainer>;
	}
}
