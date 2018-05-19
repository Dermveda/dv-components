import styled from 'styled-components';
import { space, themeGet, lineHeight } from 'styled-system';
import { fontSize } from 'utils';
import { IconCircle } from 'atoms';

export const ListItemTitle = styled.h3.attrs({
	fontSize: [3, 4],
	lineHeight: 2,
	pb: 3,
	m: 0
})`
	${space};
	${lineHeight};
	${fontSize};
	font-family: ${themeGet('fonts.display', 'serif')};
`;

export const ListItemBody = styled.p.attrs({
	fontSize: [1, 2],
	p: 0,
	m: 0,
	lineHeight: 3
})`
	${lineHeight};
	${space};
	${fontSize};
`;

export const ListItemContainer = styled.li`
	${space};
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	background: ${props => themeGet(`backgrounds.${props.type}`, 'transparent')}
`;

export const ListItemImage = styled.img`
	width: 125px;
	height: auto;
	border-radius: 100%;
`;

export const BulletItem = styled.span.attrs({
	fontSize: 3,
	mt: 1,
	p: 2
})`
	${fontSize};
	${space};
	font-family: ${themeGet('fonts.display', 'serif')};
	width: 30px;
	height: 30px;
	border-radius: 100%;
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: center;
	color: white;
	background: ${props => themeGet(`backgrounds.${props.type}`, 'white')}
`;

export const BulletIcon = styled(IconCircle).attrs({
	p: 2,
	mt: 1
})`
	width: 30px;
	height: 30px;
	${space};
	svg {
		height: 24px;
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
