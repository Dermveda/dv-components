import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Bar, H3, ButtonLink, Icon } from 'atoms';

const ArticleBar = styled(Bar)`
	h3 {
		margin: 0;
		font-weight: 700;
		text-transform: uppercase;
	}
`;

const ArticleLink = styled(ButtonLink)`
	svg {
		color: #717171;
		transform: rotate(-90deg);
		height: 12px;
		width: 12px;
	}
`;

const ArticleListHeader = ({ title, buttonAttributes, ...props }) => {
	const { text: buttonText, ...buttonProps } = buttonAttributes;

	return (
		<ArticleBar px={2} bg="gray.light" justifyContent="space-between" {...props}>
			<H3 color="gray.medium" fontSize={1} mb={0}>{title}</H3>
			<ArticleLink fontSize={1} type="secondary" {...buttonProps} nostyle>
				{buttonText}
				<Icon name="chevronDown" type="outline" iconSize="xs" strokeSize={4} />
			</ArticleLink>
		</ArticleBar>
	);
};

ArticleListHeader.propTypes = {
	title: PropTypes.string.isRequired,
	buttonAttributes: PropTypes.shape({
		text: PropTypes.string.isRequired,
		to: PropTypes.string.isRequired
	}).isRequired
};

export default ArticleListHeader;
