import styled from 'styled-components';
import { color, flex, flexWrap, flexDirection, justifyContent, alignItems, space, themeGet, order } from 'styled-system';
import tag from 'clean-tag';
import sys from 'system-components';
import { fontSize } from 'utils';

export const HeroContainer = styled(tag.header).attrs({
	flexDirection: ['column', 'column', 'row'],
	flexWrap: ['nowrap', 'nowrap', 'wrap'],
	justifyContent: ['center', 'center', 'space-between'],
	p: props => props.p || 4
})`
	display: flex;
	overflow: hidden;
	align-content: center;
	line-height: 1.5;
	background: ${props => themeGet(`backgrounds.${props.type}`, 'transparent')};

	${color};
	${flex};
	${flexWrap};
	${flexDirection};
	${justifyContent};
	${alignItems};
	${space};
`;

export const HeroTitle = styled(tag.h1).attrs({
	m: 0,
	pb: 3,
	fontSize: [4, 5]
})`
	font-family: ${props => themeGet('fonts.display')(props)};
	font-weight: 600;

	${fontSize};
	${space};
`;

export const HeroSubTitle = styled(tag.h2).attrs({
	fontSize: 2,
	m: 0,
	pb: 1,
	color: props => props.color || '#717171'
})`
	text-transform: uppercase;
	letter-spacing: .04rem;
	font-weight: 600;

	${space};
	${fontSize};
	${color};
`;

export const HeroBody = styled(tag.div).attrs({
	p: props => (props.p || 4),
	order: [2, 2, 0],
	flex: props => props.flex || '2 60%'
})`
	max-width: 800px;
	min-width: 300px;

	${flex};
	${space};
	${order};
`;

export const HeroImage = sys({
	is: 'img',
	width: '100%',
	height: 'auto'
});
