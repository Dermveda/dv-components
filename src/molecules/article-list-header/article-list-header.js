import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Bar, H3, ButtonLink, Icon } from 'atoms';

const ArticleBar = styled(Bar)`
	position: relative;
	& > *:first-child {
		margin: 0;
		font-weight: 700;
		text-transform: uppercase;
	}
`;

const ArticleListHeader = ({ title, titleAttributes, buttonAttributes, ...props }) => {
	const { text: buttonText, ...buttonProps } = buttonAttributes;
	const headerAttributes = Object.assign({}, {
		is: 'h2',
		color: 'gray.dark',
		fontSize: 1,
		mb: 0
	}, titleAttributes);

	return (
		<ArticleBar px={2} bg="gray.light" justifyContent="space-between" {...props}>
			<H3 {...headerAttributes}>{title}</H3>
			<ButtonLink fontSize={1} type="secondary" {...buttonProps} nostyle>
				{buttonText}
				<Icon
					name="chevronDown"
					type="outline"
					height="12px"
					width="12px"
					strokeSize={4}
					rotate="-90deg"
					color="gray.light"
				/>
			</ButtonLink>
		</ArticleBar>
	);
};

ArticleListHeader.propTypes = {
	title: PropTypes.string.isRequired,
	buttonAttributes: PropTypes.shape({
		text: PropTypes.string.isRequired,
		to: PropTypes.string.isRequired
	}).isRequired,
	titleAttributes: PropTypes.object
};

ArticleListHeader.defaultProps = {
	titleAttributes: {}
};

export default ArticleListHeader;
