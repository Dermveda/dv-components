import React from 'react';
import PropTypes from 'prop-types';
import { target } from 'react-aim-fork-cs';
import styled from 'styled-components';
import { boxShadow } from 'styled-system';

const MenuContainer = styled.div.attrs({
	boxShadow: 2
})`
	position: absolute;
	${boxShadow};
	top: 0;
	z-index:200;
	left: 100%;
	background: #f7f7f7;
`;

const SubMenuContainer = ({ children, dismissDropdown }) => (
	<MenuContainer>
		{children.type ? React.cloneElement(children, { dismissDropdown }) : children}
	</MenuContainer>
);

SubMenuContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dismissDropdown: PropTypes.func
};

export default target()(SubMenuContainer);
