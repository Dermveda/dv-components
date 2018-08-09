import styled from 'styled-components';
import { space, borders, width } from 'styled-system';

export const TableContainer = styled('div').attrs({
	justifyContent: props => (props.centered ? 'center' : 'flex-start'),
	width: props => props.width || '100%',
	borders: props => props.borders || '3px solid',
	borderColor: props => props.borderColor || 'gray.light'
})`
	display: flex;
	flex-direction: column;
	${width};
	${space};
	${borders};
`;
