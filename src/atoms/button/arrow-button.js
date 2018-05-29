import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../icon/icons';
import Button from './button';
import ButtonLink from './button-link';
import { Spin } from 'animations';

const ArrowIcon = styled(Icon).attrs({
	name: 'rightArrow',
	type: 'outline',
	strokeSize: 4,
	iconSize: 'xs',
	'aria-hidden': true
})`
	color: white;
	stroke: white;
	${props => props.spin && `
		animation: ${Spin} 1s ease infinite;
	`};
`;

export const ArrowButton = ({ children, spin, ...props }) => (
	<Button {...props}>
		{children}
		<ArrowIcon alignToText spin={spin} />
	</Button>
);

ArrowButton.propTypes = {
	children: PropTypes.node.isRequired,
	spin: PropTypes.bool
};

ArrowButton.defaultProps = {
	spin: false
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
