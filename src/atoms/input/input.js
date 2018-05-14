import styled from 'styled-components';
import { space, width, height, minWidth, maxWidth } from 'styled-system';
import { fontSize } from 'utils';

const Input = styled.input.attrs({
	fontSize: props => (props.large ? [3, 2] : 2),
	p: props => (props.large ? [2, 3] : 2)
})`
	${space};
	${fontSize};
	${width};
	${height};
	${minWidth};
	${maxWidth};

	background-color: ${props => props.gray && '#F7F7F7'};
	border: 1px solid #F7F7F7;
	border-color: ${props => !props.gray && '#717171'};
	box-shadow: none;
`;

export default Input;
