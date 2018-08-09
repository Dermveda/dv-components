import styled from 'styled-components';
import { space, color, textAlign, borders, justifyContent } from 'styled-system';
import { fontSize } from 'utils';
export const TableHeadData = styled;

export const TableRow = styled('div').attrs({
	py: props => props.py || 2
})`
	display: grid;
	grid-template-columns: 1.5fr 1fr 0.5fr;
	text-transform: ${props => props.textTransform};
	font-weight: ${props => props.fontWeight};
	&:nth-last-child(-n + 2) {
		text-align: center;
	}
	${space};
	${color};
	${borders};
`;

export const TableCell = styled('div').attrs({
	fontSize: props => props.fontSize || 1,
	px: props => props.px || [2, 3, 3],
	fontWeight: props => props.fontWeight || 525
})`
	display: flex;
	${textAlign};
	${fontSize};
	${space};
	${borders};
	${justifyContent};
`;
