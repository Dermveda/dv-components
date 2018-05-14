import React from 'react';
import PropTypes from 'prop-types';
import {
	ListItemContainer,
	ListItemTitle,
	ListItemBody,
	IconCircle,
	ArrowButton
} from 'atoms';

const IconListItem = ({
	iconAttributes, buttonAttributes, title, children, ...attrs
}) => {
	const { text, ...buttonProps } = buttonAttributes;

	return (
		<ListItemContainer {...attrs}>
			<IconCircle {...iconAttributes} />
			<ListItemTitle mt={2}>{title}</ListItemTitle>
			<ListItemBody>{children}</ListItemBody>
			{text && (
				<ArrowButton mt={3} {...buttonProps}>{text}</ArrowButton>
			)}
		</ListItemContainer>
	);
};

IconListItem.propTypes = {
	title: PropTypes.string.isRequired,
	iconAttributes: PropTypes.shape({
		name: PropTypes.string.isRequired
	}).isRequired,
	children: PropTypes.node.isRequired,
	buttonAttributes: PropTypes.shape({
		text: PropTypes.string.isRequired,
		nostyle: true
	})
};

IconListItem.defaultProps = {
	buttonAttributes: {}
};

export default IconListItem;
