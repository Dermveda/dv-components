import React, { Component, createRef } from 'react';
import styled, { css } from 'styled-components';
import { Card, Icon } from 'atoms';
import { themeGet, space } from 'styled-system';
import { fontSize } from 'utils';

const SwingIn = css`
	transform-origin: top; /* equivalent to 50% 0% */
	opacity: 0;
	transform: perspective(200px) rotateX(-10deg);
	animation: swing .15s ease-out forwards;

	@keyframes swing {
		to {
		  	opacity: 1;
			transform: perspective(200px) rotateX(0deg);
		}
	}
`;

const SwingOut = css`
	transform-origin: top; /* equivalent to 50% 0% */
	opacity: 1;
	transform: perspective(200px) rotateX(0deg);
	animation: tmp .15s ease-out forwards;

	@keyframes tmp {
		to {
			opacity: 0;
			transform: perspective(200px) rotateX(-10deg);
		}
	}
`;

const Dropdown = styled(Card)`
	position: relative;
	margin-top: 8px;
	max-width: 100%;
	min-width: 300px;
	display: inline-block;
	float: left;

	${props => props.display ? SwingIn : SwingOut};

	&::after,
	&::before {
		bottom: 100%;
		border: solid transparent;
		content: " ";
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
	}

	&::after {
		border-color: rgba(255, 255, 255, 0);
		border-bottom-color: #ffffff;
		border-width: 9px;
		left: 20px;
		margin-left: -9px;
	}

	&::before {
		border-color: rgba(113, 158, 206, 0);
		border-bottom-color: #ececec;
		border-width: 10px;
		left: 20px;
		margin-left: -10px;
	}
`;

const MenuItem = styled.div.attrs({
	fontSize: [1, 1, 2],
	p: 3
})`
	display: flex;
	align-items: center;
	justify-content: space-between;

	${space};
	${fontSize};

	svg {
		transform: rotate(-90deg);
	}
`

class HoverNav extends Component {
	state = {
		displayDropdown: false
	}

	toggleDropdown = () => this.setState(({ displayDropdown }) => ({
		displayDropdown: !displayDropdown
	}));

	setDropdown = value => () => this.setState(() => ({
		displayDropdown: value
	}));

	render() {
		const { displayDropdown } = this.state;
		return (
			<div>
				<button onClick={this.toggleDropdown} onMouseEnter={this.setDropdown(true)} role="menu">tester</button>
				<div style={{ clear: 'both' }} />
				<Dropdown
					boxShadow={2}
					display={displayDropdown}
					onMouseLeave={this.setDropdown(false)}
				>
					<MenuItem>
						<span>Discipline</span>
						<Icon name="chevronDown" iconSize="sm" type="outline" />
					</MenuItem>
					<MenuItem>
						<span>Skin Conditions</span>
						<Icon name="chevronDown" iconSize="sm" type="outline" />
					</MenuItem>
					<MenuItem>
						<span>Beauty</span>
						<Icon name="chevronDown" iconSize="sm" type="outline" />
					</MenuItem>
					<MenuItem>
						<span>Welness</span>
						<Icon name="chevronDown" iconSize="sm" type="outline" />
					</MenuItem>
					<MenuItem>
						<span>Product Ingredients</span>
						<Icon name="chevronDown" iconSize="sm" type="outline" />
					</MenuItem>
				</Dropdown>
			</div>
		);
	}
}

export default HoverNav;
