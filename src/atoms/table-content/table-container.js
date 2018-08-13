import styled from 'styled-components';
import { space, borders, width, borderColor } from 'styled-system';

export const TableContainer = styled('div').attrs({
	justifyContent: props => (props.centered ? 'center' : 'flex-start'),
	width: props => props.width || '100%',
	border: props => props.border || '1px solid',
	borderColor: props => props.borderColor || 'gray.light'
})`
	display: flex;
	flex-direction: column;
	${width};
	${space};
	${borders};
	${borderColor};
`;
