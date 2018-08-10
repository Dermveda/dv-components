import sys from 'system-components';
import styled from 'styled-components';
import { createSkeletonElement } from '@trainline/react-skeletor';
import { fontSize } from 'utils';

const makeSectionTitle = sys(
	{
		fontWeight: 700,
		m: 0
	},
	'color',
	'textAlign',
	'fontFamily',
	'lineHeight'
);

export const SectionTitle = createSkeletonElement(styled(makeSectionTitle).attrs({
	fontSize: props => props.fontSize || [4, 5],
	textAlign: props => props.textAlign || 'center',
	color: props => props.color || 'textColors.1',
	is: props => props.is || 'h2',
	mt: props => props.mt || 3,
	pb: props => props.pb || 4
})`
	${fontSize};
`);

const makeSectionBody = sys('color', 'flex', 'display', 'flexWrap', 'flexDirection', 'justifyContent', 'alignItems', 'space', 'width');

export const SectionBody = styled(makeSectionBody).attrs({
	fontSize: props => props.fontSize || [1, 2]
})`
	${fontSize};
	width: inherit;
`;
