import { css } from 'styled-components';

const SlideDown = css`
	max-height: ${props => props.isHidden ? '0' : '350px'};
	overflow-y: scroll;

	transition: all .3s linear;
`;

export default SlideDown;
