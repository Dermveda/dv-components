import React, { Component } from 'react';
import { Dropdown, NavButtonLink, Icon } from 'atoms';
import { source } from 'react-aim';

class HoverNav extends Component {
	state = {
		displayDropdown: false
	}

	render() {
		const { displayDropdown } = this.state;
		const id = this.props.title.toLowerCase().split(' ').join('-');
		return (
			<li style={{ listStyleType: 'none' }}>
				<NavButtonLink
					fontSize={1}
					role="menu"
					px={2}
					mx="12px"
					data-toggle="dropdown"
					aria-haspopup="true"
					id={id}
					aria-expanded={displayDropdown}
				>
					{this.props.title}
					<Icon
						iconSize="xs"
						ml={2}
						alignToText
						type="outline"
						name="chevronDown"
						rotate={displayDropdown ? '180deg' : '0'}
					/>
				</NavButtonLink>
				<div style={{ position: 'relative' }}>
					<Dropdown
						is="ul"
						boxShadow={2}
						display={displayDropdown}
						aria-labelledby={id}
					>
						{this.props.children}
					</Dropdown>
				</div>
			</li>
		);
	}
}

export default source({
	mouseEnter: (props, component) => component.setState({ displayDropdown: true }),
	mouseLeave: (props, component) => component.setState({ displayDropdown: false })
})(HoverNav);
