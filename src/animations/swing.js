import { keyframes, css } from 'styled-components';

const swingInTransition = keyframes`
	to {
		opacity: 1;
		transform: perspective(200px) rotateX(0deg);
	}
`;

const swingOutTransition = keyframes`
	to {
		opacity: 0;
		transform: perspective(200px) rotateX(-10deg);
	}
`;

export const SwingIn = css`
	transform-origin: top; /* equivalent to 50% 0% */
	opacity: 0;
	transform: perspective(200px) rotateX(-10deg);
	animation: ${swingInTransition} .15s ease-out forwards;
`;

export const SwingOut = css`
	transform-origin: top; /* equivalent to 50% 0% */
	opacity: 1;
	transform: perspective(200px) rotateX(0deg);
	animation: ${swingOutTransition} .15s ease-out forwards;
`;
