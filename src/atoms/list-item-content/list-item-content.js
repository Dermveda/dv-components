import styled from 'styled-components';
import { space, themeGet } from 'styled-system';
import { fontSize } from 'utils';

export const ListItemTitle = styled.h3.attrs({
	fontSize: 4,
	pb: 2
})`
	${space};
	${fontSize};
	font-family: ${themeGet('fonts.display', 'serif')};
`;

export const ListItemBody = styled.p.attrs({
	fontSize: 2,
	p: 0,
	m: 0
})`
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
