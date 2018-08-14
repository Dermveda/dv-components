import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlexBox, Card, CardImage, CardContainer, CardHeader, CardTitle, CardSubtitle, CardFooter, LinkWrapper, Content } from 'atoms';
import { Section, ArticleListHeader } from 'molecules';

export default class CardRow extends Component {
	static propTypes = {
		articles: PropTypes.arrayOf(
			PropTypes.shape({
				imageAttributes: PropTypes.shape({
					src: PropTypes.string.isRequired,
					alt: PropTypes.string.isRequired
				}),
				to: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired,
				subtitleLink: PropTypes.string,
				subtitle: PropTypes.string,
				cardAttributes: PropTypes.object
			})
		),
		renderFooter: PropTypes.func,
		headerAttributes: PropTypes.shape({
			title: PropTypes.string,
			buttonAttributes: PropTypes.shape({
				text: PropTypes.string.isRequired
			})
		}),
		showAll: PropTypes.bool,
		description: PropTypes.string,
		footerProps: PropTypes.arrayOf(PropTypes.string)
	};

	static defaultProps = {
		renderFooter: () => {},
		footerProps: [],
		showAll: false,
		description: null,
		headerAttributes: null
	};

	pluckProps = (footerProps, props) =>
		Object.keys(props)
			.filter(x => footerProps.includes(x))
			.reduce((acc, curr) => ({ ...acc, [curr]: props[curr] }), {});

	renderFooter = article => {
		const { footerProps, renderFooter } = this.props;
		const renderProps = this.pluckProps(footerProps, article);
		return renderFooter(renderProps);
	};

	renderArticleRow = ({ ...article }) => (
		<Card key={`card-${article.title.split(' ').join('')}`} mx={2} my={3} flex="1 300px" {...article.cardAttributes}>
			{article.imageAttributes && (
				<LinkWrapper to={article.to}>
					<CardImage {...article.imageAttributes} />
				</LinkWrapper>
			)}
			<CardContainer>
				<CardHeader>
					<LinkWrapper to={article.to}>
						<CardTitle>{article.title}</CardTitle>
					</LinkWrapper>
					{article.subtitle && (
						<LinkWrapper to={article.subtitleLink}>
							<CardSubtitle>{article.subtitle}</CardSubtitle>
						</LinkWrapper>
					)}
				</CardHeader>
				{this.renderFooter && (
					<CardFooter mt="auto" width="100%">
						{this.renderFooter(article)}
					</CardFooter>
				)}
			</CardContainer>
		</Card>
	);

	render = () => {
		const { articles, showAll, headerAttributes, footerProps, renderFooter, description, ...props } = this.props;

		const rowArticles = showAll ? articles.map(this.renderArticleRow) : articles.slice(0, 3).map(this.renderArticleRow);

		const buttonAttributes = headerAttributes
			? {
				...headerAttributes.buttonAttributes,
				buttonLeft: false,
				small: true,
				type: 'primary',
				noButtonSpacing: true,
				nostyle: true
			  }
			: undefined;

		return (
			<Section {...props} bodyAttributes={{ width: '100%' }} centered content buttonAttributes={buttonAttributes}>
				{headerAttributes && <ArticleListHeader {...headerAttributes} />}
				{description && (
					<Content mt={3} mb={2}>
						{description}
					</Content>
				)}
				<FlexBox display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="stretch">
					{rowArticles}
				</FlexBox>
			</Section>
		);
	};
}
