import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { source } from 'react-aim';
import { space } from 'styled-system';
import { fontSize } from 'utils';
import {MegaMenuIcon} from 'atoms';

const MenuItem = styled.li.attrs({
	fontSize: [1, 1, 2],
	p: 3
})`
	display: flex;
	align-items: center;
	z-index: 250;
	justify-content: space-between;
	${space};
	${fontSize};
`;

const LinkItem = styled.div`
	min-width: 270px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const NavLink = styled(Link)`
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

	renderMenuLink = () => (
		<NavLink to={this.props.to}>{this.props.title}</NavLink>
	)

	render = () => (
		<MenuItem>
			{this.props.to ? this.renderMenuLink() : this.renderSubMenu()}
		</MenuItem>
	)
}

export default source({
	mouseEnter: (props, component) => component.setState({ displayMenu: true }),
	mouseLeave: (props, component) => component.setState({ displayMenu: false })
})(MegaMenuItem);
