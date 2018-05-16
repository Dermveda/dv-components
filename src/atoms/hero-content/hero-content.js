import styled from 'styled-components';
import { color, flex, flexWrap, flexDirection, justifyContent, alignItems, space, themeGet, order } from 'styled-system';
import { fontSize } from 'utils';

export const HeroContainer = styled.header.attrs({
	p: props => props.p || 4,
	flexDirection: ['column', 'column', 'row'],
	flexWrap: ['nowrap', 'nowrap', 'wrap'],
	justifyContent: ['center', 'center', 'space-between']
})`
	display: flex;
	line-height: 1.5;
	overflow: hidden;
	align-content: center;

	${color};
	${flex};
	${flexWrap};
	${flexDirection};
	${justifyContent};
	${alignItems};
	${space};

	background: ${props => themeGet(`backgrounds.${props.type}`, 'transparent')};
`;

export const HeroTitle = styled.h1.attrs({
	m: 0,
	pb: 3,
	fontSize: [4, 5]
})`
	${space};
	${fontSize};

	font-weight: 700;
`;

export const HeroSubTitle = styled.h2.attrs({
	fontSize: 2,
	m: 0,
	pb: 1
})`
	${fontSize};
	${space};

	text-transform: uppercase;
	letter-spacing: .04rem;
	color: #717171;
	font-weight: 600;
`;

export const HeroBody = styled.div.attrs({
	p: 4,
	order: [2, 2, 0]
})`
	flex: 1 25px;
	max-width: 600px;
	${space};
	${order};
`;

export const HeroImage = styled.img`

`;
