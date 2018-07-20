import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { height } from 'styled-system';
import { Link } from 'react-router-dom';

const ExternalLink = styled('a')`
	color: inherit;
	text-decoration: none;
	cursor: pointer;

	display: block;
	&:hover {
		color: currentColor !important;
		text-decoration: none;
	}
	${height};
`;

const InternalLink = ExternalLink.withComponent(Link);

const LinkWrapper = ({ to, href, children, ...props }) => {
	if (to)
		return (
			<InternalLink to={to} {...props}>
				{children}
			</InternalLink>
		);
	else if (href)
		return (
			<ExternalLink href={href} {...props} target="_blank" rel="noopener noreferrer">
				{children}
			</ExternalLink>
		);
	return <React.Fragment>{children}</React.Fragment>;
};

LinkWrapper.propTypes = {
	to: PropTypes.string,
	href: PropTypes.string,
	children: PropTypes.node.isRequired
};

LinkWrapper.defaultProps = {
	to: null
};

export default LinkWrapper;
