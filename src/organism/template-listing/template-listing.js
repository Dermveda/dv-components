import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createSkeletonProvider } from '@trainline/react-skeletor';
import { Message, ArticleListing, CircleMessage, ImageSection, SmallMessage, VideoSection, HtmlSection, SignUpCTA, SignUpHero } from './shared';

class TemplateListing extends Component {
	static propTypes = {
		sections: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string,
				key: PropTypes.string,
				buttonText: PropTypes.string,
				tagTemplate: PropTypes.string,
				articles: PropTypes.array,
				messageText: PropTypes.string,
				showAll: PropTypes.bool
			}).isRequired
		)
	};

	selectType = ({ type, ...props }, index) => {
		switch (type) {
			case 'Message':
				return props.messageSmall ? <SmallMessage key={index} {...props} /> : <Message key={index} {...props} />;
			case 'Tag':
				return <ArticleListing key={index} {...props} />;
			case 'CircleMessage':
				return <CircleMessage key={index} {...props} />;
			case 'ImageSection':
				return <ImageSection key={index} {...props} />;
			case 'VideoPlayer':
				return <VideoSection key={index} {...props} />;
			case 'SignUpCTA':
				return <SignUpCTA key={index} {...props} />;
			case 'SignUpHero':
				return <SignUpHero key={index} {...props} />;
			case 'HTML':
				return <HtmlSection key={index} {...props} />;
			default:
				return null;
		}
	};

	render = () => <React.Fragment>{this.props.sections.map(this.selectType)}</React.Fragment>;
}

const makeFakeArticle = index => ({
	_id: index,
	title: '__________',
	slug: '____ ___',
	image: {
		secure_url: '__________',
		style: { height: 'calc(20vh)', maxHeight: '200px', display: 'block' }
	},
	imageAlt: '_______',
	content: {
		brief: '______'
	},
	categories_v2: {
		key: '______',
		name: '______'
	},
	subCategories: {
		name: '_______',
		key: '______'
	}
});

const articles = [makeFakeArticle(0), makeFakeArticle(1), makeFakeArticle(2)];

const section = {
	title: '____ _____',
	type: 'Tag',
	tagTemplate: 'tile-featured',
	buttonText: '_______',
	articles
};

const heroSection = {
	title: '____ ______',
	type: 'SignUpHero',
	image: {
		secure_url: '______',
		style: { height: '250px', display: 'block' }
	},
	messageText: '_____ _____ _____ _____ _____ _____ _____'
};

export default createSkeletonProvider(
	({ previewHero }) => {
		const sections = [section];
		if (previewHero) sections.push(heroSection);
		return {
			sections: sections.reverse()
		};
	},
	({ isLoading }) => isLoading,
	'pending'
)(TemplateListing);
