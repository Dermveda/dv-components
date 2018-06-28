import React, { Component } from 'react';
import styled from 'styled-components';
import {
	ArticleRow,
	ArticleListHeader,
	Section
} from 'molecules';

export default class TileFeatured extends Component {
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

	render = () => {
		const { articles, headerAttributes } = this.props;
		const rowArticles = articles
			.map(this.renderArticleRow);

		return (
			<Section centered content buttonAttributes={{
				...headerAttributes.buttonAttributes,
				noButtonSpacing: true,
				buttonLeft: false,
				nostyle: true,
				small: true,
				type: 'primary'
			}}>
				<ArticleListHeader {...headerAttributes} />
				{rowArticles}
			</Section>
		);
	}
}
