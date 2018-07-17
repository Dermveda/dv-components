import React, { Component } from 'react';
import {
	FlexBox, Card, CardImage, CardContainer, CardHeader, CardTitle, CardSubtitle, CardFooter, LinkWrapper, Content
} from 'atoms';
import { Section, ArticleListHeader } from 'molecules';

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
		<Card mx={2} my={3} flex="1 300px">
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
				<CardFooter width="100%">
					{this.renderFooter(article)}
				</CardFooter>
			</CardContainer>
		</Card>
	)

	render = () => {
		const {
			articles,
			showAll,
			headerAttributes,
			footerProps,
			renderFooter,
			description,
			...props
		} = this.props;

		const rowArticles = showAll ?
			articles.map(this.renderArticleRow) :
			articles
				.slice(0, 3)
				.map(this.renderArticleRow);

		const buttonAttributes = {
			...headerAttributes.buttonAttributes,
			buttonLeft: false,
			small: true,
			type: 'primary',
			noButtonSpacing: true,
			nostyle: true
		};

		return (
			<Section
				{...props}
				bodyAttributes={{ width: '100%' }}
				centered
				content
				buttonAttributes={buttonAttributes}
			>
				{headerAttributes && (<ArticleListHeader {...headerAttributes} />)}
				{description && <Content mt={3} mb={2}>{description}</Content>}
				<FlexBox
					display="flex"
					flexDirection="row"
					flexWrap="wrap"
					justifyContent="center"
					alignItems="stretch"
				>
					{rowArticles}
				</FlexBox>
			</Section>
		);
	}
}
