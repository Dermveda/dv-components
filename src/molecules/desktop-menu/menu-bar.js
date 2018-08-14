import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { fontSize } from 'utils';
import { hideVisually } from 'polished';
import { space } from 'styled-system';

import { Bar } from 'atoms';

const TitleLink = styled(Link)`
	text-decoration: none;
	outline: none;
`;

const Title = styled.div.attrs({
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

	& > * {
		height: 100%;
	}
`;

const TitleText = styled.span`
	${hideVisually()};
`;

const Box = styled.div`
	display: flex;
	flex-flow: row nowrap;

	${space};
`;

const NavBar = styled(Bar).attrs({
	is: 'nav',
	py: 3,
	px: 2,
	justifyContent: 'space-between'
})`
	border-top: 4px solid ${themeGet('colors.accent.logo')};
	border-bottom: 1px solid #acacac;
`;

class MenuBar extends Component {
	renderMenuLinks = children => React.Children.toArray(children).filter(child => child.type.displayName === 'MenuLinks');

	renderSideLinks = children => React.Children.toArray(children).filter(child => child.type.displayName !== 'MenuLinks');

	render = () => {
		const { menuLinks, children, imageAttributes, title, sourceAttributes, ...props } = this.props;
		return (
			<NavBar {...props}>
				<Box>
					<TitleLink to="/" title={title}>
						<Title>
							<TitleImage>
								{sourceAttributes.map(attributes => (
									<source {...attributes} key={attributes.srcSet} />
								))}
								<img alt={title} {...imageAttributes} />
							</TitleImage>
							<TitleText>{title}</TitleText>
						</Title>
					</TitleLink>
					{children && this.renderMenuLinks(children)}
				</Box>
				{children && this.renderSideLinks(children)}
			</NavBar>
		);
	};
}

MenuBar.propTypes = {
	menuLinks: PropTypes.shape({
		text: PropTypes.string.isRequired
	}),
	imageAttributes: PropTypes.shape({
		src: PropTypes.string.isRequired
	}).isRequired,
	sourceAttributes: PropTypes.arrayOf(
		PropTypes.shape({
			srcSet: PropTypes.string.isRequired,
			media: PropTypes.string
		})
	).isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.node
};

MenuBar.defaultProps = {
	menuLinks: null,
	children: null
};

export default MenuBar;
