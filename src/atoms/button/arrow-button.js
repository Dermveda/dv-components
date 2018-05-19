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
	type: PropTypes.oneOf(['primary', 'secondary', 'bold', 'tertiary']),
	gradient: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	outline: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	nostyle: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	squared: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	large: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	small: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	raised: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	children: PropTypes.node.isRequired
};

ArrowButton.defaultProps = {
	type: 'primary',
	raised: false,
	nostyle: false,
	gradient: false,
	outline: false,
	squared: false,
	large: false,
	small: false
};

export const ArrowButtonLink = ({ children, ...props }) => (
	<ButtonLink {...props}>
		{children}
		<ArrowIcon alignToText />
	</ButtonLink>
);

ArrowButtonLink.propTypes = {
	type: PropTypes.oneOf(['primary', 'secondary', 'bold', 'tertiary']),
	gradient: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	outline: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	nostyle: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	squared: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	large: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	small: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	raised: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	children: PropTypes.node.isRequired
};

ArrowButtonLink.defaultProps = {
	type: 'primary',
	raised: false,
	nostyle: false,
	gradient: false,
	outline: false,
	squared: false,
	large: false,
	small: false
};
