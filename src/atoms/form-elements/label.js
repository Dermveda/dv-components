import styled from 'styled-components';
import { fontSize } from 'utils';
import { space } from 'styled-system';

const Label = styled.label.attrs({
	fontSize: [1, 2],
	pb: 1
})`
	${space};
	${fontSize};
`;

export default Label;
