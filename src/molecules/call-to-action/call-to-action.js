import React from 'react';
import PropTypes from 'prop-types';
import sys from 'system-components';
import { themeGet } from 'styled-system';
import { fontSize } from 'utils';

import { Button, ButtonLink } from 'atoms';

const Title = sys({
	is: 'h4',
	pb: 4,
	m: 0,
	fontSize: [3, 4],
	fontWeight: 700
}).extend`
	${fontSize}

	font-family: ${themeGet('fonts.display', 'serif')};
`;

const Body = sys({
	is: 'p',
	p: 0,
	pb: 3,
	m: 0,
	fontSize: [2, 3],
	fontWeight: 'normal'
}).extend`
	${fontSize}
`;

const Section = sys({
	is: 'section',
	display: 'flex',
	flexDirection: ['column', 'row'],
	flexWrap: ['nowrap', 'wrap'],
	alignItems: ['flex-start', 'center'],
	justifyContent: 'space-between',
	fontWeight: 600,
	p: [5, 6],
	background: '#f7f7f7'
});

const Box = sys({
	pr: 3,
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	alignItems: 'flex-start'
});

const CallToAction = ({ buttonProps, title, children }) => {
	const { text, ...buttonAttrs } = buttonProps;

	return (
		<Section>
			<Box>
				<Title>{title}</Title>
				<Body>{children}</Body>
			</Box>
			{
				buttonProps.onClick ? (
					<Button type="primary" outline {...buttonAttrs}>{text}</Button>
				) : (
					<ButtonLink type="primary" outline {...buttonAttrs}>{text}</ButtonLink>
				)
			}
		</Section>
	);
};

CallToAction.propTypes = {
	buttonProps: PropTypes.shape({
		text: PropTypes.string.isRequired
	}).isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default CallToAction;
