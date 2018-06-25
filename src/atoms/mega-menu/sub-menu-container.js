import { target } from 'react-aim';
import styled from 'styled-components';
import { boxShadow } from 'styled-system';

const SubMenuContainer = target()(styled.div.attrs({
	boxShadow: 2
})`
	position: absolute;
	${boxShadow};
	top: 0;
	z-index:200;
	left: 100%;
	background: #f7f7f7;
`);

export default SubMenuContainer;
