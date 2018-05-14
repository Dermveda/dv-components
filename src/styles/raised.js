import { css } from 'styled-components';
import { themeGet } from 'styled-system';

const raised = css`
	box-shadow: ${themeGet('shadows.1', 'none')};
	transition: all .2s ease-in-out;
	margin-top: 2px;

	&:hover {
		box-shadow: ${themeGet('shadows.2', 'none')};

		margin-top: 0;
		margin-bottom: 2px;
	}

	&:active, &:focus {
		box-shadow: ${themeGet('shadows.1', 'none')};

		margin-top: 2px;
		margin-bottom: 0;
	}
`;

export default raised;
