import { css } from 'styled-components';

const SlideDown = css`
	max-height: ${props => (props.isHidden ? '0' : props.maxHeight || '1000px')};
	background-color: ${props => props.backgroundColor};
	overflow-y: scroll;

	transition: all 0.3s linear;
`;

export default SlideDown;
