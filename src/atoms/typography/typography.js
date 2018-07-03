import styled from 'styled-components';
import sys from 'system-components';
import { createSkeletonElement } from '@trainline/react-skeletor';
import { space, color, textAlign, fontWeight } from 'styled-system';
import { fontSize } from 'utils';

const makeH3Component = sys({
	lineHeight: 1.25,
	display: 'inline-block',
	fontFamily: 'fonts.display'
}, 'textAlign', 'space', 'fontWeight', 'fontSize', 'color', 'maxWidth');

const H3Component = styled(makeH3Component).attrs({
	fontSize: props => props.fontSize || [2, 3, 3],
	m: props => props.m || 0,
	mb: props => props.mb || 3,
	is: props => props.is || 'h3'
})`
	${fontSize};
`;

export const H3 = createSkeletonElement(H3Component);

const makeSubtitleComponent = sys(
	'textAlign', 'space', 'fontWeight', 'color'
);

const SubtitleComponent = styled(makeSubtitleComponent).attrs({
	fontSize: props => props.fontSize || [0, 1],
	m: props => props.m || 0,
	mb: props => props.mb || 2,
	is: props => props.is || 'h4',
	fontWeight: props => props.fontWeight || 600,
	color: props => props.color || 'gray.medium'
})`
	display: inline-block;
	letter-spacing: .03rem;
	text-transform: uppercase;
	line-height: 1;
	${fontSize};
`;

export const Subtitle = createSkeletonElement(SubtitleComponent);

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
