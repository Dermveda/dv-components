import React, { Component } from 'react';
import { ArticleRow } from 'molecules';

export default class ArticleRowList extends Component {
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
