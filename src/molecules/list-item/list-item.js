import React from 'react';
import PropTypes from 'prop-types';
import {
	ListItemContainer,
	ListItemTitle,
	ListItemBody,
	ArrowButton
} from 'atoms';


const ListItem = ({
	title, children, buttonAttributes, ...attrs
}) => {
	const { text, ...buttonProps } = buttonAttributes;

	return (
		<ListItemContainer {...attrs}>
			<ListItemTitle>{title}</ListItemTitle>
			<ListItemBody>{children}</ListItemBody>
			{text && (
				<ArrowButton mt={3} {...buttonProps}>{text}</ArrowButton>
			)}
		</ListItemContainer>
	);
};

ListItem.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	buttonAttributes: PropTypes.shape({
		text: PropTypes.string.isRequired,
		nostyle: true
	})
};

ListItem.defaultProps = {
	buttonAttributes: {}
};

export default ListItem;
