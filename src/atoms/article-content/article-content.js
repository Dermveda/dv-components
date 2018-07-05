import sys from 'system-components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createSkeletonElement } from '@trainline/react-skeletor';
import { space, themeGet, width, maxWidth, display } from 'styled-system';
import { flipOrder } from 'styles';
import { fontSize } from 'utils';
import tag from 'clean-tag';

export const ArticleHeader = styled.header`
	${flipOrder};
`;

export const ArticleContainer = sys({
	is: 'div',
	py: 3,
	display: 'grid',
	gridTemplateColumns: '1fr 30%',
	lineHeight: '1.5',
	justifyContent: 'space-between',
	alignItems: 'flex-start'
});

export const ArticleBody = styled.div.attrs({
	fontSize: [0, 1, 2],
	mr: [2, 3]
})`
	${fontSize};
	${space};
`;

const makeArticleImage = styled(tag.img).attrs({
	maxWidth: ['300px', '400px', '400px'],
	m: ['0 -38.885%', 0, 0],
	width: ['177.777%', '100%', '100%']
})`
	${width};
	${maxWidth};
	${space};
`;
export const ArticleImage = createSkeletonElement(makeArticleImage);

export const ArticleImageContainer = styled.div`
	flex: 1 30%;
	@media screen and (max-width: ${themeGet('breakpoints.0', '40em')}) {
		overflow: hidden;
	}
`;

export const ArticleImageLinkable = styled(Link)`
	color: inherit;
	text-decoration: none !important;

	&:hover {
		color: inherit;
	}

	flex: 1 30%;
	@media screen and (max-width: ${themeGet('breakpoints.0', '40em')}) {
		overflow: hidden;
	}
`;

const makeArticleDescription = styled.div.attrs({
	m: props => props.m || 0,
	pb: props => props.pb || 3,
	fontSize: 1,
	display: ['none', 'none', 'block']
})`
	${display};
	${space};
	${fontSize};
`;
export const ArticleDescription = createSkeletonElement(makeArticleDescription);
