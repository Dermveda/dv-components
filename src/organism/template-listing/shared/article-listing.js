import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Element } from 'react-scroll';
// import { FlexBox } from 'atoms';
import { TileFeatured, TileSmall, CardRow, Lifestyle, RowListing } from '../../index';
// import { fontSize } from 'utils';
// import { AuthorBadge, Heart } from 'components';
// import { formatArticle } from 'filters';

// TODO: import AuthorBadge and Heart if leaving renderFooter as a function prop
// const Authors = styled(AuthorBadge).attrs({
// 	fontSize: [1, 2]
// })`
// 	margin-left: -8px;
// 	${fontSize};
// `;
// const Favorite = styled(Heart).attrs({
// 	fontSize: [1, 2]
// })`
// 	margin-left: auto;
// 	${fontSize};
// `;

const generateSubtitle = (tagLabelName, category) => {
	let res = tagLabelName ? `${tagLabelName} - ` : '';
	const parentCategoryName = (category || {}).name;

	return `${res}${parentCategoryName}`;
};

const formatArticle = ({ title, _id, authors, image = {}, tagLabel, category, content, ...article }) => {
	const { secure_url, ...imageProps } = image;
	const { name: tagLabelName } = tagLabel || {};
	const { key: categoryKey } = category || {};
	const { brief } = content || {};
	const subtitle = generateSubtitle(tagLabelName, category);
	return {
		title,
		_id,
		key: _id,
		to: `/articles/${article.slug}`,
		imageAttributes: {
			src: secure_url,
			...imageProps,
			alt: (article || {}).imageAlt
		},
		description: (brief || '').replace(/<(?:.|\n)*?>/gm, ''),
		authors,
		subtitle,
		subtitleLink: `/tags/${categoryKey}`
	};
};

const Container = styled('div')`
	& > section > div {
		min-width: 100%;
	}
`;

export default class ArticleListing extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		tags: PropTypes.array,
		linkTags: PropTypes.array,
		buttonText: PropTypes.string,
		tagTemplate: PropTypes.string,
		articles: PropTypes.arrayOf(PropTypes.object).isRequired,
		description: PropTypes.string,
		showAll: PropTypes.bool,
		renderFooter: PropTypes.func
	};

	static defaultProps = {
		showAll: false
	};

	selectTemplate = type => {
		switch (type) {
			case 'tile-featured':
				return TileFeatured;
			case 'tile-small':
				return TileSmall;
			case 'card-row':
				return CardRow;
			case 'lifestyle':
				return Lifestyle;
			default:
				return RowListing;
		}
	};

	// renderFooter = ({ authors, _id }) => (
	// 	<FlexBox display="flex" flexDirection="flex" flexWrap="nowrap" justifyContent="space-between" alignItems="center" width="100%">
	// 		<Authors authors={authors} />
	// 		{typeof _id === 'string' && <Favorite itemType="article" itemID={_id} small />}
	// 	</FlexBox>
	// );

	render = () => {
		const { title, tags = [], buttonText, linkTags, tagTemplate, articles, description, showAll, renderFooter } = this.props;
		if (!articles.length) return null;
		const Template = this.selectTemplate(tagTemplate);
		const key = title.toLowerCase().replace(/[^0-9a-zA-Z]+/g, '-');
		const renderHeader = title && title.length && buttonText;
		const articleList = showAll ? articles : articles.slice(0, 5);

		let tagBuilder;
		if (Array.isArray(linkTags) && linkTags.length) tagBuilder = linkTags.map(tag => (tag || {}).key || null).join('_');
		else tagBuilder = tags.map(tag => (tag || {}).key || null).join('_');

		let headerAttributes;
		if (renderHeader)
			headerAttributes = {
				title: title.length ? title : undefined,
				buttonAttributes: {
					to: `/tags/${tagBuilder}`,
					text: buttonText
				}
			};
		return (
			<Container>
				<Element name={key} key={key}>
					<Template
						headerAttributes={headerAttributes}
						{...showAll}
						description={description}
						articles={articleList.map(formatArticle)}
						footerProps={['authors', '_id']}
						renderFooter={renderFooter}
					/>
				</Element>
			</Container>
		);
	};
}
