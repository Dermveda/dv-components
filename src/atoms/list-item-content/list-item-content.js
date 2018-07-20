import styled from 'styled-components';
import { space, themeGet, lineHeight, width, flex } from 'styled-system';
import { createSkeletonElement } from '@trainline/react-skeletor';
import { flipOrder } from 'styles';
import { fontSize } from 'utils';
import { IconCircle } from 'atoms';

const makeListItemTitle = styled.h3.attrs({
	fontSize: [1, 2],
	lineHeight: 2,
	pb: 3,
	m: 0
})`
	${space};
	${lineHeight};
	${fontSize};
	font-weight: 600;
	font-family: ${themeGet('fonts.display', 'serif')};
`;
export const ListItemTitle = createSkeletonElement(makeListItemTitle);

const makeListItemBody = styled.p.attrs({
	fontSize: [1, 2],
	pt: 1,
	m: 0,
	lineHeight: 3
})`
	${lineHeight};
	${space};
	${fontSize};
`;
export const ListItemBody = createSkeletonElement(makeListItemBody);

export const ListItemContainer = styled.li.attrs({
	flex: props => props.flex || '1 250px'
})`
	${space};
	${width};
	${flex};
	display: block;
	background: ${props => themeGet(`backgrounds.${props.type}`, 'transparent')};
`;

const makeListItemImage = styled.img`
	width: 125px;
	height: 125px;
	border-radius: 100%;
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

export const BulletListContainer = ListItemContainer.extend`
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
