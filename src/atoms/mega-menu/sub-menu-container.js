import React from 'react';
import { target } from 'react-aim';
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

export default target()(SubMenuContainer);
