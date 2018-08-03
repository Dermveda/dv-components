import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card, LinkWrapper, CardImage, CardContainer, CardHeader, CardTitle, CardSubtitle, CardFooter, Content, FlexBox } from 'atoms';
import { ArticleListHeader, Section, ArticleRowList } from 'molecules';
import { modifyCloudinary } from 'utils';

export default class TileFeatured extends Component {
	pluckProps = (footerProps, props) =>
		Object.keys(props)
			.filter(x => footerProps.includes(x))
			.reduce((acc, curr) => ({ ...acc, [curr]: props[curr] }), {});

	renderFooter = article => {
		const { footerProps, renderFooter } = this.props;
		const renderProps = this.pluckProps(footerProps, article);
		return renderFooter(renderProps);
	};

	renderArticleTile = (article) => (
		<Card mx={2} my={3} flex="1 45%" maxWidth="100%" minWidth={['100%', '450px']}>
			<FlexBox display={['block', 'none']}>
				<LinkWrapper to={article.to}>
					<CardImage {...article.imageAttributes} />
				</LinkWrapper>
			</FlexBox>
			<FlexBox display="flex" alignItems="stretch" height="100%">
				<FlexBox display={['none', 'block']} flex="1 50%" height="100%">
					<LinkWrapper to={article.to} style={{ width: '100%', height: '100%' }}>
						<div style={{
							backgroundImage: `url("${modifyCloudinary(article.imageAttributes.src, { w: 400, h: 700, c: 'fill', g: 'auto' })}")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							height:'100%'
						}} />
					</LinkWrapper>
				</FlexBox>
				<FlexBox py={[4, 6]} alignSelf="center" px={3} flex="1 50%">
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
				</FlexBox>
			</FlexBox>
		</Card>
	)

	render = () => {
		const {
			articles, description, renderFooter, footerProps, headerAttributes, ...props
		} = this.props;

		const buttonAttributes = headerAttributes ? {
			...headerAttributes.buttonAttributes,
			noButtonSpacing: true,
			buttonLeft: false,
			nostyle: true,
			small: true,
			type: 'primary'
		} : undefined;

		let articleList = null;
		if (articles.length < 2) articleList = articles;
		else if (articles.length > 2) articleList = articles.slice(2);

		return (
			<Section centered content {...props} buttonAttributes={buttonAttributes}>
				{headerAttributes && (<ArticleListHeader {...headerAttributes} />)}
				{description && <Content mt={3} mb={2}>{description}</Content>}
				{articles.length >= 2 && (
					<FlexBox
						flexWrap="wrap"
						display="flex"
						justifyContent="center"
						alignItems="stretch"
						mx={-2}
						mb={5}
					>
						{this.renderArticleTile(articles[0])}
						{this.renderArticleTile(articles[1])}
					</FlexBox>
				)}
				{articleList && (
					<ArticleRowList
						articles={articleList}
						renderFooter={renderFooter}
						footerProps={footerProps}
					/>
				)}
			</Section>
		);
	}
}

TileFeatured.propTypes = {
	articles: PropTypes.arrayOf(PropTypes.shape({
		imageAttributes: PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired
		}),
		to: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		subtitleLink: PropTypes.string,
		subtitle: PropTypes.string
	})),
	renderFooter: PropTypes.func,
	headerAttributes: PropTypes.shape({
		title: PropTypes.string,
		buttonAttributes: PropTypes.shape({
			text: PropTypes.string.isRequired
		})
	}),
	description: PropTypes.string,
	footerProps: PropTypes.arrayOf(PropTypes.string)
};

TileFeatured.defaultProps = {
	renderFooter: () => {},
	footerProps: [],
	description: null,
	headerAttributes: null
};
