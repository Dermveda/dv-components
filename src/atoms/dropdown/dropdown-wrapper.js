import styled from 'styled-components';
import { target } from 'react-aim';

const DropdownContainer = styled.div`
	position: absolute;
	left: 20px;
	top: -10px;
	display: inline-block;

	& > ul {
		margin-top: 16px;
	}
`;

export default target()(DropdownContainer);
