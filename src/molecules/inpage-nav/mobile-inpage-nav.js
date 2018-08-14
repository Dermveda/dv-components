import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import { Bar, ChevronDown, NavScrollLink } from 'atoms';
import { SlideDown } from 'animations';
import { fontSize } from 'utils';

const NavBar = styled(Bar)`
	width: 100%;
	left: 0;
	overflow: hidden;
	padding: 0 8px;
	position: sticky;
	${space};
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
	static propTypes = {
		links: PropTypes.arrayOf(
			PropTypes.shape({
				to: PropTypes.string.isRequired,
				text: PropTypes.string.isRequired
			})
		).isRequired
	};

	state = {
		selectedItem: this.props.links[0].text,
		isHidden: true
	};

	componentDidUpdate = prevProps => {
		if (this.props.links[0].text !== prevProps.links[0].text) {
			this.setState({ selectedItem: this.props.links[0].text });
		}
	};

	handleSetActive = to =>
		this.setState({
			selectedItem: this.props.links.find(x => x.to === to).text
		});

	handleDropDownToggle = () =>
		this.setState(({ isHidden }) => ({
			isHidden: !isHidden
		}));

	render = () => {
		const { links, ...props } = this.props;

		return (
			<NavBar color="black" is="nav" bg="accent.primary" justifyContent="center" alignItems="center" flexDirection="column" {...props}>
				<Box onClick={this.handleDropDownToggle}>
					<div>{this.state.selectedItem}</div>
					<ChevronDown iconSize="sm" isOpen={!this.state.isHidden} />
				</Box>
				<Slider isHidden={this.state.isHidden}>
					{links.map(link => (
						<NavScrollLink
							key={link.to}
							to={link.to}
							spy
							leftBorder
							pl={2}
							onSetActive={this.handleSetActive}
							color="black !important"
							smooth
							isDynamic
							duration={300}
							offset={-80}
							onClick={this.handleDropDownToggle}>
							{link.text}
						</NavScrollLink>
					))}
				</Slider>
			</NavBar>
		);
	};
}
