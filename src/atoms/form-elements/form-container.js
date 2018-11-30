import styled from 'styled-components';
import { space } from 'styled-system';

const FormContainer = styled('form').attrs({
	p: props => (props.p || props.p === 0 ? props.p : 3)
})`
	${space};
`;

const FormGroup = styled('div').attrs({
	p: 2
})`
	input {
		width: 100%;
	}
	${space};
`;

export { FormContainer, FormGroup };
