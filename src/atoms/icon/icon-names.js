import React from 'react';
import * as IconListing from './icon-listing';

export const icons = {
	rightArrow: 'RightArrow',
	clock: 'Clock',
	award: 'Award',
	price: 'Price',
	simpleCheck: 'SimpleCheck',
	user: 'User',
	bookStack: 'BookStack',
	menu: 'Menu',
	close: 'Close',
	player: 'Player',
	chevronDown: 'ChevronDown',
	facebook: 'Facebook',
	twitter: 'Twitter',
	instagram: 'Instagram',
	youtube: 'Youtube',
	western: 'Western',
	ayurveda: 'Ayurveda',
	tcm: 'TCM',
	naturopathy: 'Naturopathy',
	cart: 'Cart',
	school: 'SchoolBuilding',
	search: 'Search',
	externalLink: 'Link',
	circleCross: 'CircleCross',
	circleCheck: 'CircleCheck',
	circle: 'Circle',
	plus: 'Plus',
	home: 'Home',
	videoLibrary: 'VideoLibrary'
};

const Icon = (icon, type) => {
	const name = icons[icon];
	const Component = IconListing[name];
	return <Component type={type} />;
};

const IconMapper = (name, style = 'glyph') => Icon(name, style);

export default IconMapper;
