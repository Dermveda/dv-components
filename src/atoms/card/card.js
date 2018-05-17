import sys from 'system-components';
import styled from 'styled-components';
import { fontSize } from 'utils';
import { flipOrder } from 'styles';
import { space } from 'styled-system';

export const Card = sys({
	is: 'section',
	border: '1px solid #ececec',
	borderRadius: '3px',
	background: 'white',
	boxShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	maxWidth: 500,
	color: '#2b2b2b'
});

export const CardContainer = sys({
	is: 'div',
	p: 4,
	display: 'flex',
	alignItems: 'flex-start',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	justifyContent: 'space-between',
	height: '100%'
});

export const CardImage = sys({
	is: 'img',
	p: 0,
	mt: '-1px',
	mb: 0,
	ml: '-1px',
	width: 'calc(100% + 2px)'
});

export const CardTitle = styled.h3.attrs({
	fontSize: [3, 4],
	pb: 3,
	m: 0
})`
	${space};
	${fontSize};
	line-height: 1.25;
	font-weight: 700;
`;

export const CardSubtitle = styled.h4.attrs({
	fontSize: [1, 2],
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
	fontSize: [1, 2],
	m: 0
})`
	${space};
	${fontSize};

	line-height: 1.5;
`;

export const CardFooter = sys({
	is: 'footer',
	pt: 3
});
