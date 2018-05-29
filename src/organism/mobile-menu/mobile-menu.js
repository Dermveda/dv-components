import styled from 'styled-components';
import { Transition, animated } from 'react-spring';
import { NavLink, Link } from 'react-router-dom';
import React, { Component } from 'react';
import { space, themeGet } from 'styled-system';
import { Icon, MenuIcon } from 'atoms';
import { fontSize } from 'utils';
import { lighten } from 'polished';

const LinkText = styled.div`
	height: 12px;
	text-align: center;
	color: #2b2b2b;
	text-decoration: none;
`;

const MobileContainer = styled.nav.attrs({
	px: '12px',
	m: 0
})`
	background-color: ${themeGet('colors.gray.light', '#f7f7f7')};
	color: ${themeGet('colors.gray.dark', '#2b2b2b')};
	${space};

	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;

	position: fixed;
	left: 0;
	bottom: 0;

	width: 100vw;
`;

const MobileItem = styled(NavLink).attrs({
	pt: 2,
	pb: '12px',
	px: '12px'
})`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;

	height: 56px;
	text-align: center;
	${space};
	font-weight: 600;
	text-decoration: none;

	svg { color: #717171; }

	&.active ${LinkText},
	&.active svg {
		color: ${themeGet('colors.tertiary.main')};
	}
`;

const MenuContainer = styled.div`
	height: calc(100vh - 76px);
	transition: transform .3s linear, opacity .3s linear;
	background-color: #f7f7f7;
	position: fixed;
	width: 100vw;
	left: 0;
	box-sizing: border-box;

	display: flex;
	flex-flow: column nowrap;

	${space};
`;

const MobileNavLinkContainer = styled.div.attrs({
	p: [4, 5]
})`
	${space};
	display: flex;
	flex-flow: column nowrap;

	& > * {
		margin: 8px;
	}
`;

const MobileNavLink = styled(NavLink).attrs({
	fontSize: 3,
	py: 1
})`
	${fontSize};
	${space};
	font-family: ${themeGet('fonts.display', 'serif')};
	text-decoration: none;
	color: ${themeGet('colors.gray.dark', '#2b2b2b')};

	&:hover {
		color: ${props => themeGet('colors.primary.main')(props)};
	}
`;

const CTANavLink = styled(Link).attrs({
	py: 4,
	px: [4, 5],
	fontSize: 3
})`
	font-weight: 600;
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	background-color: blue;
	color: #2b2b2b;
	text-decoration: none;
	margin-top: auto;
	background-color: ${props => lighten(0.25, themeGet('colors.primary.main')(props))};

	&:hover {
		background-color: ${props => themeGet('colors.primary.main')(props)};
	}

	svg {
		margin-left: 16px;
		margin-top: -3px;
	}
	${space};
	${fontSize};
`;

class MobileMenu extends Component {
	state = {
		showMenu: false
	}

	onClick = () => {
		this.setState(({ showMenu }) => ({ showMenu: !showMenu }));
	}

	render() {
		const showStyles = {
			opacity: 1,
			transform: 'translateY(0)',
			top: 0
		};

		const hiddenStyles = {
			opacity: 0,
			transform: 'translateY(100%)'
		};

		const { drawerLinks, appBarLinkLeft, appBarLinkRight, showCallToAction, callToAction } = this.props;

		return (
			<React.Fragment>
				<MenuContainer style={this.state.showMenu ? showStyles : hiddenStyles}>
					<MobileNavLinkContainer>
						{drawerLinks.map(({ link, text }) => (
							<MobileNavLink
								key={link}
								to={link}
								onClick={this.onClick}
							>{text}</MobileNavLink>
						))}
					</MobileNavLinkContainer>
					{showCallToAction && (
						<CTANavLink to={callToAction.link} onClick={this.onClick}>
							{callToAction.text}
							<Icon name="rightArrow" iconSize="sm" aria-hidden />
						</CTANavLink>
					)}
				</MenuContainer>
				<MobileContainer>
					<MobileItem to={appBarLinkLeft.link}>
						<Icon name={appBarLinkLeft.icon} iconSize="md" />
						<LinkText>{appBarLinkLeft.text}</LinkText>
					</MobileItem>
					<MenuIcon iconSize="md" p={3} onClick={this.onClick} isDismiss={this.state.showMenu} />
					<MobileItem to={appBarLinkRight.link}>
						<Icon name={appBarLinkRight.icon} iconSize="md" />
						<LinkText>{appBarLinkRight.text}</LinkText>
					</MobileItem>
				</MobileContainer>
			</React.Fragment>
		);
	}
}

export default MobileMenu;
