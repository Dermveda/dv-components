import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	ListItemContainer,
	ListItemTitle,
	ListItemBody,
	ListItemHeader,
	IconCircle,
	ArrowButton,
	Subtitle,
	ArrowButtonLink
} from 'atoms';

class IconListItem extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		iconAttributes: PropTypes.shape({
			name: PropTypes.string.isRequired
		}).isRequired,
		subtitle: PropTypes.string,
		children: PropTypes.node.isRequired,
		buttonAttributes: PropTypes.shape({
			text: PropTypes.string.isRequired,
			nostyle: true
		})
	}

	static defaultProps = {
		buttonAttributes: {},
		subtitle: null
	}

	renderButton = (buttonProps, text) => (
		buttonProps.onClick ? (
			<ArrowButton {...buttonProps} mt={3}>{text}</ArrowButton>
		) : (
			<ArrowButtonLink {...buttonProps} mt={3}>{text}</ArrowButtonLink>
		)
	)

	render() {
		const { iconAttributes, buttonAttributes, title, children, subtitle, ...attrs } = this.props;
		const { text, ...buttonProps } = buttonAttributes;

		return (
			<ListItemContainer {...attrs}>
				<IconCircle {...iconAttributes} />
				<ListItemHeader mt={3}>
					<ListItemTitle>{title}</ListItemTitle>
					{subtitle && <Subtitle pb={1} color="#717171">{subtitle}</Subtitle>}
				</ListItemHeader>
				<ListItemBody>{children}</ListItemBody>
				{text && this.renderButton(buttonProps, text)}
			</ListItemContainer>
		);
	}
}

export default IconListItem;
