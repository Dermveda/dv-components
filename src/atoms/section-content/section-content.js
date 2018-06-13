import styled from 'styled-components';
import { color, flex, flexWrap, flexDirection, fontFamily, justifyContent, alignItems, space, themeGet } from 'styled-system';
import { fontSize } from 'utils';

export const SectionTitle = styled.h2.attrs({
	fontSize: [4, 5],
	pb: 4,
	m: 0,
	mt: 3,
	color: props => props.color || themeGet('textColors.1')(props)
})`
	${fontSize};
	${fontFamily}
	${space};
	${color};

	text-align: center;
	font-weight: 700;
`;

export const SectionBody = styled.div.attrs({
	fontSize: [1, 2]
})`
	${fontSize};
	${color};
	${flex};
	${flexWrap};
	${flexDirection};
	${justifyContent};
	${alignItems};
	${space};
`;
