import React, { Component } from 'react';
import styled from 'styled-components';
import { Dropdown, Icon, NavButtonLink } from 'atoms';
import { source } from 'react-aim';

const ProfileDropdown = styled(Dropdown)`
	left: -200px;
	&::after, &::before { left: 250px; }
`;

class UserDropdown extends Component {
	state = {
		displayDropdown: false
	}

	render() {
		const { displayDropdown } = this.state;
		return (
			<li style={{ listStyleType: 'none' }}>
				<NavButtonLink
					fontSize={1}
					role="menu"
					px={2}
					mx="12px"
				>
					<Icon
						iconSize="sm"
						ml={2}
						name="user"
						type="glyph"
						color="primary.main"
					/>
				</NavButtonLink>
				<div style={{ position: 'relative' }}>
					<ProfileDropdown is="ul" boxShadow={2} display={displayDropdown}>
						{this.props.children}
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
