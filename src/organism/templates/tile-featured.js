import React, { Component } from 'react';
import styled from 'styled-components';
import {
	ArticleRow,
	ArticleListHeader,
	Section
} from 'molecules';

const FlexBox = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
	justify-content: space-between;
	margin: -16px;
	margin-bottom: 16px;
`;

class TileFeatured extends Component {
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
			<Section centered content>
				<ArticleListHeader {...headerAttributes} />
				{rowArticles}
			</Section>
		);
	}
}

export default TileFeatured;
