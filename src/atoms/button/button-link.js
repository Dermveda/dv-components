import React, { Component } from 'react';
import styled from 'styled-components';
import { themeGet, space } from 'styled-system';
import { fontSize } from 'utils';
import { Link as RouterLink } from 'react-router-dom';
import { nostyle, outline } from 'styles';
import Button, { buttonProps, buttonDefaultProps } from './button';

const Link = Button.withComponent('a');
const ExternalLink = styled(Link)`
	${space};
	${fontSize};

	text-decoration: none;
	color: ${props => themeGet(`colors.${props.type}.secondary`, '#2b2b2b')};

	&:hover {
		color: ${props => themeGet(`colors.${props.type}.secondary`, '#2b2b2b')};
		text-decoration: none;
	}

	${props => props.outline ? outline : ''};
	${props => props.nostyle ? nostyle : ''};
	${props => props.white ? `
		border-color: white;
		color: white;
		background-color: transparent;

		&:hover {
			background: rgba(0, 0, 0, 0.2);
		}

		&:focus, &:active {
			background: rgba(0, 0, 0, 0.4);
		}
	` : ''}
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
