import { keyframes } from 'styled-components';

const Spin = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export default Spin;
