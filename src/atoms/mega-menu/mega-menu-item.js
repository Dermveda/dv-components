import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { source } from 'react-aim';
import { space, hover } from 'styled-system';
import { fontSize } from 'utils';
import {MegaMenuIcon} from 'atoms';

const MenuItem = styled.li.attrs({
	fontSize: [1, 1, 2],
	px: 3,
	py: 2
})`
	display: flex;
	align-items: center;
	z-index: 250;
	font-weight: 500;
	justify-content: space-between;
	${space};
	${fontSize};
`;

const LinkItem = styled.div.attrs({
	hover: {
		color: 'primary.main'
	}
})`
	min-width: 270px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${hover};
`;

const NavLink = styled(Link)`
	min-width: 270px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: currentColor;
`;

const NavButtonLink = styled.button`
	border: none;
	background: transparent;
	min-width: 270px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: currentColor;
`;

class MegaMenuItem extends Component {
	state = {
		displayMenu: false
	}

	renderSubMenu = () => (
		<React.Fragment>
			<LinkItem>
				<span>{this.props.title}</span>
				<MegaMenuIcon />
			</LinkItem>
			{this.state.displayMenu && this.props.children}
		</React.Fragment>
	)

	renderMenuLink = () =>
		this.props.to ?
			<NavLink to={this.props.to}>{this.props.title}</NavLink> :
			<NavButtonLink onClick={this.props.onClick}>{this.props.title}</NavButtonLink>

	render = () => (
		<MenuItem>
			{this.props.children ? this.renderSubMenu() : this.renderMenuLink()}
		</MenuItem>
	)
}

export default source({
	mouseEnter: (props, component) => component.setState({ displayMenu: true }),
	mouseLeave: (props, component) => component.setState({ displayMenu: false })
})(MegaMenuItem);
