import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSize } from 'utils';
import { hideVisually } from 'polished';
import { space } from 'styled-system';

import { Bar, NavLink, MenuLinks } from 'atoms';

const NavBar = Bar.withComponent('nav');

const Title = styled.h1.attrs({
	fontSize: 3
})`
	display: flex;
	margin: 0;
	padding: 0;
	${fontSize};
`;

const TitleImage = styled.picture`
	width: auto;
	height: 64px;

	& > * { height: 100% };
`;

const TitleText = styled.span`
	${hideVisually()};
`;

const Box = styled.div`
	display: flex;
	flex-flow: row nowrap;

	${space};
`;

const MenuBar = ({
	menuLinks, children, imageAttributes, title, sourceAttributes
}) => (
	<NavBar py={3} px={2} justifyContent="space-between" display={['none', 'none', 'flex']}>
		<Box>
			<Title>
				<TitleImage>
					{sourceAttributes.map(attributes => (
						<source {...attributes} key={attributes.srcset} />
					))}
					<img alt={title} {...imageAttributes} />
				</TitleImage>
				<TitleImage {...imageAttributes} alt={title} aria-hidden />
				<TitleText>{title}</TitleText>
			</Title>
			{menuLinks && (
				<MenuLinks>
					{menuLinks.map(({ text, ...attrs }) => (
						<NavLink key={text} {...attrs}>{text}</NavLink>
					))}
				</MenuLinks>
			)}
		</Box>
		{children && (
			<Box>
				{children}
			</Box>
		)}
	</NavBar>
);

MenuBar.propTypes = {
	menuLinks: PropTypes.shape({
		text: PropTypes.string.isRequired
	}),
	imageAttributes: PropTypes.shape({
		src: PropTypes.string.isRequired
	}).isRequired,
	sourceAttributes: PropTypes.arrayOf(PropTypes.shape({
		srcset: PropTypes.string.isRequired,
		media: PropTypes.string
	})).isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.node
};

MenuBar.defaultProps = {
	menuLinks: null,
	children: null
};

export default MenuBar;