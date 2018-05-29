import React, { Component } from 'react';
import styled from 'styled-components';
import { createSkeletonElement } from '@trainline/react-skeletor';
import { Link as RouterLink } from 'react-router-dom';
import tag from 'clean-tag';
import {
	buttonProps, buttonDefaultProps, buttonCSS, buttonAttributes
} from './button-styles';

const makeExternalLink = styled(tag.a).attrs(buttonAttributes)`
	${buttonCSS};
`;
const makeLocalLink = styled(RouterLink).attrs(buttonAttributes)`
	${buttonCSS};
`;
const ExternalLink = createSkeletonElement(makeExternalLink);
const LocalLink = createSkeletonElement(makeLocalLink);

export default class ButtonLink extends Component {
	static propTypes = buttonProps
	static defaultProps = buttonDefaultProps

	render = () => {
		const { href, ...attrs } = this.props;
		return href ? (
			<ExternalLink href={href} rel="noopener noreferrer" target="_blank" {...attrs} />
		) : (
			<LocalLink {...attrs } />
		);
	}
}
