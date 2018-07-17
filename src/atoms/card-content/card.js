import sys from 'system-components';
import styled from 'styled-components';
import { fontSize } from 'utils';
import { flipOrder } from 'styles';
import { space } from 'styled-system';

export const Card = sys({
	border: '1px solid #ececec',
	borderRadius: '3px',
	background: 'white',
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	maxWidth: 500,
	color: '#2b2b2b',
}, 'boxShadow', 'space', 'hover', 'flex', () => `
	transition: all .2s ease-in-out;
`);

export const CardContainer = sys({
	is: 'div',
	p: 4,
	display: 'grid',
	gridTemplateRows: '1fr auto',
	height: '100%'
});

export const CardImage = sys({
	is: 'img',
	p: 0,
	mt: '-1px',
	mb: 0,
	ml: '-1px',
	flex: '1',
	width: 'calc(100% + 2px)'
});

export const CardTitle = styled.h3.attrs({
	fontSize: [2, 3],
	pb: 2,
	m: 0
})`
	${space};
	${fontSize};
	line-height: 1.25;
	font-weight: 700;
`;

export const CardSubtitle = styled.h4.attrs({
	fontSize: [0, 1],
	pb: 1,
	m: 0
})`
	${space};
	${fontSize};

	color: #717171;
	text-transform: uppercase;
	letter-spacing: .04rem;
`;

export const CardHeader = styled.header`
	${flipOrder};
`;

export const CardText = styled.p.attrs({
	fontSize: 1,
	m: 0
})`
	${space};
	${fontSize};

	line-height: 1.5;
`;

export const CardFooter = sys({
	is: 'footer',
	pt: 3,
	mt: 'auto',
	gridRowStart: 2,
	gridRowEnd: 3
}, 'width');
