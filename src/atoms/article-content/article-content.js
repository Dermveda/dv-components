import sys from 'system-components';
import styled from 'styled-components';
import { space, themeGet } from 'styled-system';
import { flipOrder } from 'styles';
import { fontSize } from 'utils';

export const ArticleHeader = styled.header`
	${flipOrder};
`;

export const ArticleContainer = sys({
	is: 'div',
	py: 3,
	flexDirection: 'row',
	flexWrap: 'nowrap',
	display: 'flex',
	lineHeight: '1.5',
	justifyContent: 'space-between',
	alignItems: 'center'
});

export const ArticleBody = styled.div.attrs({
	fontSize: [1, 1, 2],
	mr: [2, 3]
})`
	${fontSize};
	${space};

	flex: 2 70%;
`;

export const ArticleImage = sys({
	is: 'img',
	maxWidth: ['300px', '400px', '400px'],
	m: ['0 -38.885%', 0, 0],
	width: ['177.777%', '100%', '100%']
});

export const ArticleImageContainer = styled.div`
	flex: 1 30%;
	@media screen and (max-width: ${themeGet('breakpoints.0', '40em')}) {
		overflow: hidden;
	}
`;

export const ArticleDescription = sys({
	is: 'p',
	m: 0,
	pt: 3,
	display: ['none', 'none', 'block']
});
