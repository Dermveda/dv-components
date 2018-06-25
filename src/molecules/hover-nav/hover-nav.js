import React, { Component } from 'react';
import styled from 'styled-components';
import { Dropdown, NavButtonLink, Icon } from 'atoms';
import { space, boxShadow } from 'styled-system';
import { fontSize } from 'utils';
import { source, target } from 'react-aim';


const Button = styled.button`
	padding: 16 24px;
	font-size: 1.4rem;
	margin: 0 16px;
`;

class HoverNav extends Component {
	state = {
		displayDropdown: false
	}

	render() {
		const { displayDropdown } = this.state;
		return (
			<li style={{ listStyleType: 'none' }}>
				<NavButtonLink
					// onClick={this.toggleDropdown}
					role="menu"
				>
					{this.props.title}
					<Icon
						iconSize="xs"
						ml={2}
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
