import styled from 'styled-components';
import {
	color,
	flex,
	flexWrap,
	flexDirection,
	justifyContent,
	alignItems,
	space,
	themeGet,
	order,
	borders,
	borderColor,
	boxShadow,
	width,
	height
} from 'styled-system';
import tag from 'clean-tag';
import { createSkeletonElement } from '@trainline/react-skeletor';
import { fontSize } from 'utils';

export const HeroContainer = styled(tag.header).attrs({
	flexDirection: ['column', 'column', 'row'],
	flexWrap: ['nowrap', 'nowrap', 'wrap'],
	justifyContent: ['center', 'center', 'space-between'],
	p: props => props.p || 4,
	borderColor: props => props.borderColor
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
	${borders};
	${borderColor};
	${boxShadow};
	${width};
`;

const makeHeroTitle = styled.h1.attrs({
	m: 0,
	pb: 3,
	fontSize: props => props.fontSize || [4, 5]
})`
	font-family: ${props => themeGet('fonts.display')(props)};
	font-weight: ${props => props.fontWeight || 'normal'};

	${fontSize};
	${space};
`;

export const HeroTitle = createSkeletonElement(makeHeroTitle);

const makeHeroSubTitle = styled.h2.attrs({
	fontSize: props => props.fontSize || 2,
	m: 0,
	pb: 1,
	color: props => props.color || '#717171'
})`
	text-transform: uppercase;
	letter-spacing: 0.04rem;
	font-weight: 600;

	${space};
	${fontSize};
	${color};
`;

export const HeroSubTitle = createSkeletonElement(makeHeroSubTitle);

const makeHeroBody = styled.div.attrs({
	p: props => props.p || 4,
	order: [2, 2, 0],
	flex: props => props.flex || '2 60%'
})`
	max-width: 800px;
	min-width: ${props => props.minWidth || '300px'};

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	${flex};
	${space};
	${order};
`;

export const HeroBody = createSkeletonElement(makeHeroBody);

const makeHeroImage = styled('img').attrs({
	width: props => props.width || '100%'
})`
	${width};
	height: ${props => props.height || 'auto'};
	@media (max-width: 320px) {
		height: ${props => {
		if (props.height !== 'auto' && props.height.slice(-2) === 'px') return `${parseInt(props.height.slice(0, -2)) / 2}px`;
		return props.height;
	}};
	}
`;

export const HeroImage = createSkeletonElement(makeHeroImage);
