import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	ListItemContainer,
	ListItemTitle,
	ListItemBody,
	ListItemImage,
	ArrowButton,
	ArrowButtonLink
} from 'atoms';

class ImageListItem extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		imageAttributes: PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired
		}).isRequired,
		children: PropTypes.node.isRequired,
		buttonAttributes: PropTypes.shape({
			text: PropTypes.string.isRequired,
			nostyle: true
		})
	}

	static defaultProps = {
		buttonAttributes: {}
	}

	renderButton = (buttonProps, text) => (
		buttonProps.onClick ? (
			<ArrowButton {...buttonProps} mt={3}>{text}</ArrowButton>
		) : (
			<ArrowButtonLink {...buttonProps} mt={3}>{text}</ArrowButtonLink>
		)
	)

	render() {
		const { imageAttributes, buttonAttributes, title, children, ...attrs } = this.props;
		const { text, ...buttonProps } = buttonAttributes;

		return (
			<ListItemContainer {...attrs}>
				<ListItemImage {...imageAttributes} />
				<ListItemTitle mt={2}>{title}</ListItemTitle>
				<ListItemBody>{children}</ListItemBody>
				{text && this.renderButton(buttonProps, text)}
			</ListItemContainer>
		);
	}
}

export default ImageListItem;
