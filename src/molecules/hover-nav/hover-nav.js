import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownContainer, NavButtonLink, Icon } from 'atoms';
import { source } from 'react-aim';

class HoverNav extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		children: PropTypes.node
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
				<NavButtonLink
					fontSize={1}
					role="menu"
					px={2}
					mx="12px"
					data-toggle="dropdown"
					aria-haspopup="true"
					onClick={this.toggleDropdown}
					id={id}
					aria-expanded={displayDropdown}>
					{this.props.title}
					<Icon iconSize="xs" ml={2} alignToText type="outline" name="chevronDown" rotate={displayDropdown ? '180deg' : '0'} />
				</NavButtonLink>
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
