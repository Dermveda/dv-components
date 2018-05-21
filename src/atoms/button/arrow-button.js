import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from '../icon/icons';
import { Button, ButtonLink } from 'atoms';
import { buttonProps, buttonDefaultProps } from './button';

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

class ArrowButton extends Component {
	static propTypes = buttonProps
	static defaultProps = buttonDefaultProps

	render = () => {
		const { children, ...props } = this.props;

		return(
			<Button {...props}>
				{children}
				<ArrowIcon alignToText />
			</Button>
		);
	}
}

class ArrowButtonLink extends Component {
	static propTypes = buttonProps
	static defaultProps = buttonDefaultProps

	render = () => {
		const { children, ...props } = this.props;

		return(
			<ButtonLink {...props}>
				{children}
				<ArrowIcon alignToText />
			</ButtonLink>
		);
	}
}

module.exports = {
	ArrowButton,
	ArrowButtonLink
};
