import React, { Component } from 'react';
import styled from 'styled-components';
import { createSkeletonElement } from '@trainline/react-skeletor';
import { Link as RouterLink } from 'react-router-dom';
import { buttonProps, buttonDefaultProps, buttonCSS, buttonAttributes } from './button-styles';

const makeExternalLink = styled.a.attrs(buttonAttributes)`
	${buttonCSS};
`;

/* eslint-disable no-unused-vars */
const makeLocalLink = styled(({ type, gradient, outline, squared, large, small, raised, children, nostyle, white, ...props }) => (
	<RouterLink {...props}>{children}</RouterLink>
)).attrs(buttonAttributes)`
	${buttonCSS};
`;
/* eslint-enable */

const ExternalLink = createSkeletonElement(makeExternalLink);
const LocalLink = createSkeletonElement(makeLocalLink);

export default class ButtonLink extends Component {
	static propTypes = buttonProps;
	static defaultProps = buttonDefaultProps;

	render = () => {
		const { href, ...attrs } = this.props;
		return href ? (
			<div>
				<ExternalLink href={href} rel="noopener noreferrer" target="_blank" {...attrs} />
			</div>
		) : (
			<div>
				<LocalLink {...attrs} />
			</div>
		);
	};
}
