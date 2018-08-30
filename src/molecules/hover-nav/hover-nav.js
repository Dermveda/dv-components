import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color } from 'styled-system';
import { Dropdown, DropdownContainer, NavButtonLink, Icon } from 'atoms';
import { source } from 'react-aim';
import { fontSize } from 'utils';

const NavLink = styled(NavButtonLink).attrs({
	fontSize: 1,
	px: 2,
	mx: '12px',
	color: props => props.color || 'gray.dark'
})`
	font-weight: 650 !important;
	${fontSize};
	${space};
	${color};
`;

class HoverNav extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		children: PropTypes.node,
		topLevelLinkAttributes: PropTypes.object
	};

	state = {
		displayDropdown: false
	};

	renderChildren = children =>
		React.Children.map(
			children,
			child =>
				child.props.to
					? React.cloneElement(child, { onClick: this.dismissDropdown })
					: React.cloneElement(child, { dismissDropdown: this.dismissDropdown })
		);

	dismissDropdown = () => this.setState({ displayDropdown: false });

	toggleDropdown = () => this.setState(({ displayDropdown }) => ({ displayDropdown: !displayDropdown }));

	render() {
		const { displayDropdown } = this.state;
		const id = this.props.title
			.toLowerCase()
			.split(' ')
			.join('-');
		return (
			<li style={{ listStyleType: 'none' }}>
				<NavLink
					role="menu"
					data-toggle="dropdown"
					aria-haspopup="true"
					onClick={this.toggleDropdown}
					id={id}
					{...this.props.topLevelLinkAttributes}
					aria-expanded={displayDropdown}>
					{this.props.title}
					<Icon iconSize="xs" ml={2} alignToText type="outline" name="chevronDown" rotate={displayDropdown ? '180deg' : '0'} />
				</NavLink>
				<div style={{ position: 'relative' }}>
					<DropdownContainer>
						<Dropdown is="ul" boxShadow={2} display={displayDropdown} aria-labelledby={id}>
							{this.renderChildren(this.props.children)}
						</Dropdown>
					</DropdownContainer>
				</div>
			</li>
		);
	}
}

export default source({
	mouseEnter: (props, component) => component.setState({ displayDropdown: true }),
	mouseLeave: (props, component) => component.setState({ displayDropdown: false })
})(HoverNav);
