import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../icon/icons';
import { Button, ButtonLink } from '../index';

const ArrowIcon = styled(Icon).attrs({
	name: 'rightArrow',
	type: 'outline',
	strokeSize: 4,
	iconSize: 'xs',
	'aria-hidden': true
})`
	color: white;
	stroke: white;
`;

export const ArrowButton = ({ children, ...props }) => (
	<Button {...props}>
		{children}
		<ArrowIcon alignToText />
	</Button>
);

ArrowButton.propTypes = {
	children: PropTypes.node.isRequired
};

export const ArrowButtonLink = ({ children, ...props }) => (
	<ButtonLink {...props}>
		{children}
		<ArrowIcon alignToText />
	</ButtonLink>
);

ArrowButtonLink.propTypes = {
	children: PropTypes.node.isRequired
};
