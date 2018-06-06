import styled from 'styled-components';
import { fontSize } from 'utils';
import { space, color } from 'styled-system';

const Label = styled.label.attrs({
	fontSize: [1, 2],
	pb: 1
})`
	display: block;
	${color};
	${space};
	${fontSize};
`;

export default Label;
