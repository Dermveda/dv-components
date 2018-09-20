import styled from 'styled-components';
import { space, width, height, minWidth, maxWidth, themeGet } from 'styled-system';
import { fontSize } from 'utils';

const mediumGray = themeGet('colors.gray.medium', '#717171');
const lightGray = themeGet('colors.gray.light', '#F7F7F7');
const darkGray = themeGet('colors.gray.dark', '#2b2b2b');

const Input = styled.input.attrs({
	fontSize: props => props.fontSize || (props.large ? [3, 2] : 2),
	p: props => (props.large ? [2, 3] : 2)
})`
	${space};
	${fontSize};
	${width};
	${height};
	${minWidth};
	${maxWidth};

	transition: all 0.2s linear;
	background-color: ${props => props.gray && lightGray};
	border: 1px solid ${mediumGray};
	border-color: ${props => props.gray && lightGray};
	box-shadow: none;
	display: block;
	${props => (props.uppercase ? 'text-transform: uppercase;' : '')};

	&:focus {
		border-color: ${props => (props.gray ? mediumGray : darkGray)};
	}
`;

export default Input;
