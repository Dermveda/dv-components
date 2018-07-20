import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { height } from 'styled-system';
import { Link } from 'react-router-dom';

const NoStyleLink = styled(Link)`
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

const LinkWrapper = ({ to, children, ...props }) =>
	to ? (
		<NoStyleLink {...props} to={to}>
			{children}
		</NoStyleLink>
	) : (
		<React.Fragment>{children}</React.Fragment>
	);

LinkWrapper.propTypes = {
	to: PropTypes.string,
	children: PropTypes.node.isRequired
};

LinkWrapper.defaultProps = {
	to: null
};

export default LinkWrapper;
