import styled from 'styled-components';
import { createSkeletonElement } from '@trainline/react-skeletor';
import { space, color, textAlign, themeGet, fontWeight } from 'styled-system';
import { fontSize } from 'utils';

const makeH3 = styled.h3.attrs({
	fontSize: props => props.fontSize || [2, 3, 3],
	m: props => props.m || 0,
	mb: props => props.mb || 3
})`
	${textAlign};
	${space};
	${fontWeight};
	${fontSize};
	${color};

	line-height: 1.25;
	display: inline-block;
	font-family: ${props => props.display ? themeGet('fonts.display')(props) : 'inherit'};
`;
export const H3 = createSkeletonElement(makeH3);


const makeSubtitle = styled.h4.attrs({
	fontSize: [0, 1],
	m: props => props.m || 0,
	mb: props => props.pb || 2
})`
	${textAlign};
	${space};
	${fontWeight};
	${fontSize};
	${color};
	display: inline-block;
	letter-spacing: .03rem;
	text-transform: uppercase;
	line-height: 1;
`;
export const Subtitle = createSkeletonElement(makeSubtitle);

const makeContent = styled.div.attrs({
	fontSize: [1, 2],
	mb: props => props.mb || 2
})`
	${space};
	${fontSize};
	${color};

	line-height: 1.5;
`;
export const Content = createSkeletonElement(makeContent);
