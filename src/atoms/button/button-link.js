import React, { Component } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { buttonProps, buttonDefaultProps } from './button';
import { buttonAttributes, buttonCSS } from './button-styles';
import tag from 'clean-tag';

const ExternalLink = styled(tag.a).attrs(buttonAttributes)`
	text-decoration: none;
	${buttonCSS};
`;
const LocalLink = ExternalLink.withComponent(RouterLink);

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
