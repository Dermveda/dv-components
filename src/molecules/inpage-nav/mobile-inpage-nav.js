import React, { Component } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { space } from 'styled-system';
import { Bar, NavLink, ChevronDown } from 'atoms';
import { SlideDown } from 'animations';
import { fontSize } from 'utils';

const Link = NavLink.withComponent(ScrollLink);

const NavBar = styled(Bar)`
	width: 100%;
	left: 0;
	overflow: hidden;
	padding: 0 8px;
`;

const Slider = styled.div`
	${SlideDown};
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	overflow-x: hidden;
	justify-content: flex-start;
	width: 100%;

	& > a {
		margin: 8px 0;
		width: 100%;
		display: block;
		text-align: left;
	}
`;

const Box = styled.div.attrs({
	fontSize: 1
})`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	${space};
	${fontSize};
`;

export default class MobileInPageNav extends Component {
	state = {
		selectedItem: this.props.links[0].text,
		isHidden: true
	}

	handleSetActive = to => this.setState({
		selectedItem: this.props.links.find(x => x.to === to).text
	})

	handleDropDownToggle = () => this.setState(({ isHidden }) => ({
		isHidden: !isHidden
	}));

	render = () => {
		const { links, ...props } = this.props;

		return (
			<NavBar
				is="nav"
				bg="accent.secondary"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				{...props}
			>
				<Box onClick={this.handleDropDownToggle}>
					<div>{this.state.selectedItem}</div>
					<ChevronDown iconSize="sm" isOpen={!this.state.isHidden} />
				</Box>
				<Slider isHidden={this.state.isHidden}>
					{links.map(link => (
						<Link
							key={link.to}
							to={link.to}
							spy
							leftBorder
							onSetActive={this.handleSetActive}
							color="gray.dark"
							smooth
							isDynamic
							duration={300}
							offset={-70}
							onClick={this.handleDropDownToggle}
						>
							{link.text}
						</Link>
					))}
				</Slider>
			</NavBar>
		);
	}
}
