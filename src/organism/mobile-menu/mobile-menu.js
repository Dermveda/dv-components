import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import React, { Component } from 'react';
import { space, themeGet } from 'styled-system';
import { Icon, MenuIcon } from 'atoms';
import { MobileMenuContainer } from 'molecules';
import { fontSize } from 'utils';
import { lighten } from 'polished';

const LinkText = styled.div`
	height: 12px;
	text-align: center;
	color: #2b2b2b;
	text-decoration: none;
`;

const MobileContainer = styled.nav.attrs({
	px: 0,
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

	svg {
		color: #717171;
	}
`;

const MenuContainer = styled.div`
	height: calc(100vh - 56px);
	transition: transform 0.3s cubic-bezier(0.59, 0.04, 0.4, 1), opacity 0.3s cubic-bezier(0.59, 0.04, 0.4, 1);
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
	px: 0,
	py: 4
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
	fontSize: 2
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
	background-color: ${props => lighten(0.25, themeGet('colors.primary.main')(props))};

	&:hover {
		background-color: ${props => themeGet('colors.primary.main')(props)};
	}

	svg {
		margin-left: 16px;
		margin-top: 0;
	}
	${space};
	${fontSize};
`;

class MobileMenu extends Component {
	state = {
		showMenu: false
	};

	onClick = () =>
		this.setState(({ showMenu }) => {
			if (typeof document !== 'undefined') {
				const body = document.getElementsByTagName('body')[0];
				if (!showMenu) body.classList.add('no-scroll');
				else body.classList.remove('no-scroll');
			}

			return { showMenu: !showMenu };
		});

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
			<div className={this.props.className}>
				<MenuContainer style={this.state.showMenu ? showStyles : hiddenStyles}>
					<MobileNavLinkContainer>
						<MobileMenuContainer links={drawerLinks} dismiss={this.onClick} />
					</MobileNavLinkContainer>
					{showCallToAction && (
						<CTANavLink to={callToAction.link} onClick={this.onClick}>
							{callToAction.text}
							<Icon name="rightArrow" iconSize="sm" aria-hidden />
						</CTANavLink>
					)}
				</MenuContainer>
				<MobileContainer>
					<MobileItem to={appBarLinkLeft.link} exact>
						<Icon name={appBarLinkLeft.icon} iconSize="md" />
						<LinkText>{appBarLinkLeft.text}</LinkText>
					</MobileItem>
					<MenuIcon iconSize="md" py={3} onClick={this.onClick} isDismiss={this.state.showMenu} />
					<MobileItem to={appBarLinkRight.link} exact>
						<Icon name={appBarLinkRight.icon} iconSize="md" />
						<LinkText>{appBarLinkRight.text}</LinkText>
					</MobileItem>
				</MobileContainer>
			</div>
		);
	}
}

export default MobileMenu;
