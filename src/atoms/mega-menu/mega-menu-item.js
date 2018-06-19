import React, { Component } from 'react';
import styled from 'styled-components';
import { source } from 'react-aim';
import { space } from 'styled-system';
import { fontSize } from 'utils';
import {MegaMenuIcon} from 'atoms';

const MenuItem = styled.div.attrs({
	fontSize: [1, 1, 2],
	p: 3
})`
	display: flex;
	align-items: center;
	justify-content: space-between;
	${space};
	${fontSize};
`;

class MegaMenuItem extends Component {


	state = {
		displayMenu: false
	}

	render = () => (
		<MenuItem>
			<div style={{ minWidth: '270px' }}>
				<span>{this.props.title}</span>
				<MegaMenuIcon />
			</div>
			{this.state.displayMenu && this.props.children}
		</MenuItem>
	)
}

export default source({
	mouseEnter: (props, component) => component.setState({ displayMenu: true }),
	mouseLeave: (props, component) => component.setState({ displayMenu: false })
})(MegaMenuItem);
