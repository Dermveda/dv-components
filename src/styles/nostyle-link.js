import { css } from 'styled-components';

const noStyleLink = css`
	color: inherit;
	text-decoration: none;

	display: block;
	height: 100%;

	& > * {
		height: 100%;

		button {
			margin-top: auto;
		}
	}

	&:hover {
		color: currentColor !important;
		text-decoration: none;
	}
`;

export default noStyleLink;
