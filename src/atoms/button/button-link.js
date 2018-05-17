import React from 'react';
import PropTypes from 'prop-types';
import { themeGet, space } from 'styled-system';
import { fontSize } from 'utils';
import { Link as RouterLink } from 'react-router-dom';
import { nostyle, outline } from 'styles';
import Button from './button';

const Link = Button.withComponent('a');
const ExternalLink = Link.extend`
	${space};
	${fontSize};

	text-decoration: none;
	color: ${props => themeGet(`colors.${props.type}.secondary`, '#2b2b2b')};

	&:hover {
		color: ${props => themeGet(`colors.${props.type}.secondary`, '#2b2b2b')};
		text-decoration: none;
	}

	${props => props.outline && outline};
	${props => props.nostyle && nostyle};
	${props => props.white && `
		border-color: white;
		color: white;
		background-color: transparent;

		&:hover {
			background: rgba(0, 0, 0, 0.2);
		}

		&:focus, &:active {
			background: rgba(0, 0, 0, 0.4);
		}
	`}
`;
const LocalLink = ExternalLink.withComponent(RouterLink);

const ButtonLink = ({ href, ...attrs }) => (
	href ? (
		<ExternalLink href={href} rel="noopener noreferrer" target="_blank" {...attrs} />
	) : (
		<LocalLink {...attrs } />
	)
);

ButtonLink.propTypes = {
	href: PropTypes.string
};

ButtonLink.defaultProps = {
	href: null
};

export default ButtonLink;
