import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Dropdown, Icon, NavButtonLink, DropdownContainer } from 'atoms';
import { source } from 'react-aim-fork-cs';

const ProfileDropdown = styled(DropdownContainer)`
	left: -200px;
	& > ul::after,
	& > ul::before {
		left: 250px;
	}
`;

class UserDropdown extends Component {
	static propTypes = {
		children: PropTypes.node
	};

	state = {
		displayDropdown: false
	};

	dismissDropdown = () => this.setState({ displayDropdown: false });

	renderChildren = children =>
		React.Children.map(
			children,
			child =>
				child.props.to
					? React.cloneElement(child, { onClick: this.dismissDropdown })
					: React.cloneElement(child, { dismissDropdown: this.dismissDropdown })
		);

	render() {
		const { displayDropdown } = this.state;
		return (
			<li style={{ listStyleType: 'none' }}>
				<NavButtonLink fontSize={1} role="menu" px={2} mx="12px">
					<Icon iconSize="sm" ml={2} name="user" alignToText type="glyph" color="primary.main" />
				</NavButtonLink>
				<div style={{ position: 'relative' }}>
					<ProfileDropdown>
						<Dropdown is="ul" boxShadow={2} display={displayDropdown}>
							{this.renderChildren(this.props.children)}
						</Dropdown>
					</ProfileDropdown>
				</div>
			</li>
		);
	}
}

export default source({
	mouseEnter: (props, component) => component.setState({ displayDropdown: true }),
	mouseLeave: (props, component) => component.setState({ displayDropdown: false })
})(UserDropdown);
