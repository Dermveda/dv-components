import React, { Component } from 'react';
import btoa from 'btoa';
import { Wiggle } from 'img';
import {
	Card, CardImage, CardContainer, CardHeader, CardTitle, CardSubtitle, CardFooter, LinkWrapper, FlexBox, Content
} from 'atoms';
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
		<Card mx={2} my={3} boxShadow={1} flex="1 300px" hover={{ boxShadow: 2 }}>
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
			headerAttributes = {
				buttonAttributes: { text: null }
			},
			description,
			footerProps,
			showAll,
			renderFooter,
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
			type: 'primary'
		};

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
				}}
			>
				{description && (
					<Content {...cardContentStyles}>
						{description}
					</Content>
				)}
				<FlexBox
					display="flex"
					flexDirection="row"
					pt={4}
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
