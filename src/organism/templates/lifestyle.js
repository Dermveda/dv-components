import React, { Component } from 'react';
import PropTypes from 'prop-types';
import btoa from 'btoa';
import { Wiggle } from 'img';
import { Card, CardImage, CardContainer, CardHeader, CardTitle, CardSubtitle, CardFooter, LinkWrapper, FlexBox, Content } from 'atoms';
import { Section } from 'molecules';

const cardContentStyles = {
	m: 0,
	mx: 'auto',
	textAlign: 'center',
	fontSize: [2, 3],
	color: 'accent.tertiary',
	fontWeight: 600,
	maxWidth: '800px'
};

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
		<Card mx={2} my={3} boxShadow={1} flex="1 300px" hover={{ boxShadow: 2 }} {...article.cardAttributes}>
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
				{this.renderFooter && <CardFooter width="100%">{this.renderFooter(article)}</CardFooter>}
			</CardContainer>
		</Card>
	);

	render = () => {
		const { articles, headerAttributes, description, footerProps, showAll, renderFooter, ...props } = this.props;

		const rowArticles = showAll ? articles.map(this.renderArticleRow) : articles.slice(0, 3).map(this.renderArticleRow);

		const buttonAttributes = headerAttributes
			? {
				...headerAttributes.buttonAttributes,
				buttonLeft: false,
				small: true,
				type: 'primary'
			  }
			: undefined;

		return (
			<Section
				{...props}
				my="24px !important"
				bg="accent.primary"
				backgroundImage={{
					url: `data:image/svg+xml;base64,${btoa(Wiggle)}`,
					pattern: true,
					size: '90px'
				}}
				bodyAttributes={{ width: '100%' }}
				title={headerAttributes && headerAttributes.title}
				centered
				content
				buttonAttributes={buttonAttributes}
				titleAttributes={{
					fontFamily: 'styled',
					pb: 1,
					color: 'accent.tertiary',
					fontWeight: 400
				}}>
				{description && <Content {...cardContentStyles}>{description}</Content>}
				<FlexBox display="flex" flexDirection="row" pt={4} flexWrap="wrap" justifyContent="center" alignItems="stretch">
					{rowArticles}
				</FlexBox>
			</Section>
		);
	};
}
