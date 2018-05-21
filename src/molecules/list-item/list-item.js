import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	ListItemContainer,
	ListItemTitle,
	ListItemBody,
	ArrowButton,
	ArrowButtonLink
} from 'atoms';

class ListItem extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		children: PropTypes.node.isRequired,
		buttonAttributes: PropTypes.shape({
			text: PropTypes.string.isRequired,
			nostyle: PropTypes.oneOf(['true', 'false'])
		})
	}

	static defaultProps = {
		buttonAttributes: {
			nostyle: 'true'
		}
	}

	renderButton = (buttonProps, text) => (
		buttonProps.onClick ? (
			<ArrowButton {...buttonProps} mt={3}>{text}</ArrowButton>
		) : (
			<ArrowButtonLink {...buttonProps} mt={3}>{text}</ArrowButtonLink>
		)
	)

	render() {
		const { title, children, buttonAttributes, ...attrs } = this.props;
		const { text, ...buttonProps } = buttonAttributes;

		return (
			<ListItemContainer {...attrs}>
				<ListItemTitle>{title}</ListItemTitle>
				<ListItemBody>{children}</ListItemBody>
				{text && this.renderButton(buttonProps, text)}
			</ListItemContainer>
		);
	}
}

export default ListItem;
