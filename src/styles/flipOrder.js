import { css } from 'styled-components';

const flipOrder = css`
	display: flex;
	flex-flow: column nowrap;
	& > *:last-child {
		order: -1;
	}
`;

export default flipOrder;
