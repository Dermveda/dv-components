import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	BulletItem,
	BulletIcon,
	BulletListContainer,
	ListItemTitle,
	ListItemBody,
	ArrowButton,
	ArrowButtonLink
} from 'atoms';


class BulletListItem extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		children: PropTypes.node.isRequired,
		iconAttributes: PropTypes.shape({
			name: PropTypes.string.isRequired
		}),
		listOrderAttributes: PropTypes.shape({
			value: PropTypes.number
		}),
		buttonAttributes: PropTypes.shape({
			text: PropTypes.string.isRequired,
			nostyle: PropTypes.bool
		})
	}

	static defaultProps = {
		buttonAttributes: {
			nostyle: true
		},
		iconAttributes: { name: null },
		listOrderAttributes: {
			value: 0
		}
	}

	renderButton = (buttonProps, text) => (
		buttonProps.onClick ? (
			<ArrowButton {...buttonProps} mt={3}>{text}</ArrowButton>
		) : (
			<ArrowButtonLink {...buttonProps} mt={3}>{text}</ArrowButtonLink>
		)
	)

	renderBullet = ({ value, ...bulletAttributes}, iconAttributes) => (
		iconAttributes.name ? (
			<BulletIcon {...iconAttributes} />
		) : (
			<BulletItem {...bulletAttributes}>{value}</BulletItem>
		)
	)

	render() {
		const {
			title,
			children,
			iconAttributes,
			listOrderAttributes,
			buttonAttributes,
			...attrs
		} = this.props;
		const { text, ...buttonProps } = buttonAttributes;

		return (
			<BulletListContainer {...attrs}>
				<div>
					{this.renderBullet(listOrderAttributes, iconAttributes)}
				</div>
				<div style={{ marginLeft: '8px' }}>
					<ListItemTitle>{title}</ListItemTitle>
					<ListItemBody>{children}</ListItemBody>
					{text && this.renderButton(buttonProps, text)}
				</div>
			</BulletListContainer>
		);
	}
}

export default BulletListItem;
