import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ArticleRow } from 'molecules';

export default class ArticleRowList extends Component {
	static propTypes = {
		footerProps: PropTypes.arrayOf(PropTypes.string).isRequired,
		renderFooter: PropTypes.func.isRequired,
		articles: PropTypes.arrayOf(PropTypes.shape({
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
		})).isRequired
	}

	pluckProps = (footerProps, props) => Object
		.keys(props)
		.filter(x => footerProps.includes(x))
		.reduce((acc, curr) => ({ ...acc, [curr]: props[curr] }), {});

	renderFooter = (article) => {
		const { footerProps, renderFooter } = this.props;
		const renderProps = this.pluckProps(footerProps, article);
		return renderFooter(renderProps);
	}

	renderArticleRow = ({ ...article }) => (
		<ArticleRow
			{...article}
			isLinkable
		>
			{this.renderFooter(article)}
		</ArticleRow>
	)

	render = () => this.props.articles.map(this.renderArticleRow);
}
