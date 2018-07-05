import sys from 'system-components';
import styled from 'styled-components';
import { fontSize } from 'utils';

const makeSectionTitle = sys({
	fontWeight: 700,
	pb: 4,
	m: 0,
	mt: 3
}, 'color', 'textAlign', 'fontFamily');

export const SectionTitle = styled(makeSectionTitle).attrs({
	fontSize: props => props.fontSize || [4, 5],
	textAlign: props => props.textAlign || 'center',
	color: props => props.color || 'textColors.1',
	is: props => props.is || 'h2'
})`
	${fontSize};
`;

const makeSectionBody = sys('color', 'flex', 'flexWrap', 'flexDirection', 'justifyContent', 'alignItems', 'space' ,'width');

export const SectionBody = styled(makeSectionBody).attrs({
	fontSize: props => props.fontSize || [1, 2],
})`
	${fontSize};
`;
