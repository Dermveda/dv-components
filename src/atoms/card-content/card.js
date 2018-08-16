import sys from 'system-components';
import styled from 'styled-components';
import tag from 'clean-tag';
import { createSkeletonElement } from '@trainline/react-skeletor';
import { fontSize } from 'utils';
import { flipOrder } from 'styles';
import { space, width, color } from 'styled-system';

export const CreateCard = sys(
	{
		border: '1px solid #ececec',
		borderRadius: '3px',
		background: 'white',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
		color: '#2b2b2b'
	},
	'boxShadow',
	'space',
	'hover',
	'flex',
	'maxWidth'
);

export const Card = styled(CreateCard).attrs({ maxWidth: props => props.maxWidth || [500, 500, 384] })`
	transition: all 0.2s ease -in -out;
`;

export const CardContainer = sys({
	is: 'div',
	p: 4,
	display: 'grid',
	gridTemplateRows: '1fr auto',
	height: '100%'
});

const makeCardImage = sys({
	is: 'img',
	p: 0,
	mt: '-1px',
	mb: 0,
	ml: '-1px',
	flex: '1',
	width: 'calc(100% + 2px)'
});

export const CardImage = createSkeletonElement(makeCardImage);

const makeCardTitle = styled.h3.attrs({
	fontSize: [2, 3],
	pb: 2,
	m: 0
})`
	${space};
	${fontSize};
	line-height: 1.25;
	font-weight: 700;
`;

export const CardTitle = createSkeletonElement(makeCardTitle);

const makeCardSubtitle = styled.h4.attrs({
	fontSize: [0, 1],
	pb: 1,
	m: 0
})`
	${space};
	${fontSize};

	color: #717171;
	text-transform: uppercase;
	letter-spacing: 0.04rem;
`;

export const CardSubtitle = createSkeletonElement(makeCardSubtitle);

export const CardHeader = styled.header`
	${flipOrder};
	${space};
`;

const makeCardText = styled.p.attrs({
	fontSize: 1,
	m: 0
})`
	${space};
	${fontSize};

	line-height: 1.5;
`;

export const CardText = createSkeletonElement(makeCardText);

const makeCardFooter = styled(tag.footer).attrs({
	bg: ({ isGray }) => isGray ? 'gray.light' : ''
})`
	${space};
	${width};
	${color};
`;

export const CardFooter = createSkeletonElement(makeCardFooter);
