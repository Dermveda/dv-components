import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { target } from 'react-aim';
import styled from 'styled-components';
import tag from 'clean-tag';
import { boxShadow } from 'styled-system';

const MenuContainer = styled(tag.div).attrs({
	boxShadow: 2
})`
	position: absolute;
	${boxShadow};
	top: 0;
	z-index: 200;
	left: 100%;
	background: #f7f7f7;
`;

class SubMenuContainer extends Component {
	render() {
		const { children, dismissDropdown } = this.props;
		return <MenuContainer>{children.type ? React.cloneElement(children, { dismissDropdown }) : children}</MenuContainer>;
	}
}

SubMenuContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dismissDropdown: PropTypes.func
};

export default target()(SubMenuContainer);
