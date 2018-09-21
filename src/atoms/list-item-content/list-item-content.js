import styled from 'styled-components';
import {
	space,
	themeGet,
	textAlign,
	lineHeight,
	flex,
	maxWidth,
	width,
	height,
	borders,
	borderRadius,
	borderWidth,
	borderColor
} from 'styled-system';
import { createSkeletonElement } from '@trainline/react-skeletor';
import tag from 'clean-tag';
import { flipOrder } from 'styles';
import { fontSize } from 'utils';
import { IconCircle } from 'atoms';

const makeListItemTitle = styled(tag.h3).attrs({
	fontSize: props => {
		if (typeof props.fontSize !== ('undefined' || 'null')) return props.fontSize;
		else if (props.largeFont) return [4, 5];
		return [1, 2];
	},
	lineHeight: 2,
	pb: 3,
	m: 0
})`
	${space};
	${lineHeight};
	${fontSize};
	font-weight: ${props => props.fontWeight || '500'};
	font-family: ${themeGet('fonts.display', 'serif')};
`;
export const ListItemTitle = createSkeletonElement(makeListItemTitle);

const makeListItemBody = styled(tag.p).attrs({
	fontSize: props => {
		if (typeof props.fontSize !== ('undefined' || 'null')) return props.fontSize;
		else if (props.largeFont) return [2, 3];
		return [1, 2];
	},
	pt: 1,
	m: 0,
	lineHeight: 3
})`
	${lineHeight};
	${space};
	${fontSize};
`;
export const ListItemBody = createSkeletonElement(makeListItemBody);

export const ListItemContainer = styled(tag.li).attrs({
	flex: props => props.flex || '1 250px'
})`
	${flex};
	${space};
	${maxWidth};
	${borders};
	${borderColor};
	${borderRadius};
	${borderWidth};
	${textAlign};
	${width};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background: ${props => themeGet(`backgrounds.${props.type}`, 'transparent')};
`;

const makeListItemImage = styled(tag.img).attrs({
	width: props => props.width || '125px',
	height: props => props.height || '125px',
	borderRadius: props => props.borderRadius || '100%'
})`
	${width}
	${height}
	${borderRadius}
`;
export const ListItemImage = createSkeletonElement(makeListItemImage);

export const BulletItem = styled.span.attrs({
	fontSize: 3
})`
	${fontSize};
	${space};
	font-family: ${themeGet('fonts.display', 'serif')};
	width: 30px;
	height: 30px;
	font-weight: 600;
	border-radius: 100%;
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: center;
	color: white;
	background: ${props => themeGet(`backgrounds.${props.type}`, 'white')};
`;

export const BulletIcon = styled(IconCircle).attrs({
	p: 2
})`
	width: 36px;
	height: 36px;
	${space};
	svg {
		height: 24px;
		padding: 0;
		width: 24px;
	}
`;

export const BulletListContainer = styled(ListItemContainer)`
	display: flex;
	flex-flow: row nowrap;

	& > *:first-of-type {
		flex: 1 50px;
		max-width: 50px;
	}

	& > *:last-of-type {
		flex: 1;
	}
`;

export const ListItemHeader = styled.header`
	${flipOrder};
	${space};
`;
