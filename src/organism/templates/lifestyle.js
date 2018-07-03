import React, { Component } from 'react';
import styled from 'styled-components';
import btoa from 'btoa';
import { Wiggle } from 'img';
import { Card, CardImage, CardContainer, CardHeader, CardTitle, CardSubtitle, CardFooter, LinkWrapper } from 'atoms';
import { Section } from 'molecules';

const Box = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: stretch;
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
		<Card mx={2} my={3} boxShadow={1} hover={{ boxShadow: 2 }}>
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
				title={headerAttributes.title}
				centered
				content
				buttonAttributes={buttonAttributes}
				titleAttributes={{
					fontFamily: 'styled',
					color: 'primary.main',
					fontWeight: 400
				}}
			>
				<Box>
					{rowArticles}
				</Box>
			</Section>
		);
	}
}
