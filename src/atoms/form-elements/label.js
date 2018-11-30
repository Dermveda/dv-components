import styled from 'styled-components';
import sys from 'system-components';
import { fontSize } from 'utils';

const makeLabel = sys('display', 'color', 'space');

const Label = styled(makeLabel).attrs({
	fontSize: props => props.fontSize || [1, 2],
	pb: props => props.pb || 1,
	display: props => props.display || 'block',
	is: 'label'
})`
	${fontSize};
`;

export default Label;
