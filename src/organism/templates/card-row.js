import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardImage, CardContainer, CardHeader, CardTitle, CardSubtitle, CardFooter, LinkWrapper } from 'atoms';
import { Section, ArticleListHeader } from 'molecules';

const Box = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	& > * {
		flex: 1 300px;
	}
`;

export default class CardRow extends Component {
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
		<Card mx={2} my={3}>
			<LinkWrapper to={article.to}>
				<CardImage {...article.imageAttributes} />
			</LinkWrapper>
			<CardContainer>
				<CardHeader>
					<LinkWrapper to={article.to}>
						<CardTitle>{article.title}</CardTitle>
					</LinkWrapper>
					<LinkWrapper to={article.subtitleLink}>
						<CardSubtitle>{article.subtitle}</CardSubtitle>
					</LinkWrapper>
				</CardHeader>
				<CardFooter>
					{this.renderFooter(article)}
				</CardFooter>
			</CardContainer>
		</Card>
	)

	render = () => {
		const {
			articles,
			headerAttributes,
			footerProps,
			renderFooter,
			...props
		} = this.props;

		const rowArticles = articles
			.slice(0, 3) //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
			.map(this.renderArticleRow);

		const buttonAttributes = {
			...headerAttributes.buttonAttributes,
			buttonLeft: false,
			small: true,
			type: 'primary',
			noButtonSpacing: true,
			outline: true
		};

		return (
			<Section
				{...props}
				bodyAttributes={{ width: '100%' }}
				centered
				content
				buttonAttributes={buttonAttributes}
			>
				<ArticleListHeader {...headerAttributes} />
				<Box>
					{rowArticles}
				</Box>
			</Section>
		);
	}
}
