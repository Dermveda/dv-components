import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	ListItemContainer,
	ListItemTitle,
	ListItemBody,
	ListItemImage,
	ListItemHeader,
	ArrowButton,
	ArrowButtonLink,
	Subtitle,
	LinkWrapper
} from 'atoms';

class ImageListItem extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.string,
		to: PropTypes.string,
		href: PropTypes.string,
		imageAttributes: PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired
		}).isRequired,
		children: PropTypes.node.isRequired,
		buttonAttributes: PropTypes.shape({
			text: PropTypes.string.isRequired,
			nostyle: true
		}),
		titleAttributes: PropTypes.object
	};

	static defaultProps = {
		buttonAttributes: {},
		subtitle: null
	};

	renderButton = (buttonProps, text) =>
		buttonProps.onClick ? (
			<ArrowButton {...buttonProps} mt={3}>
				{text}
			</ArrowButton>
		) : (
			<ArrowButtonLink {...buttonProps} mt={3}>
				{text}
			</ArrowButtonLink>
		);

	render() {
		const { imageAttributes, buttonAttributes, title, titleAttributes, subtitle, children, to, href, ...attrs } = this.props;
		const { text, ...buttonProps } = buttonAttributes;

		return (
			<ListItemContainer {...attrs}>
				<LinkWrapper to={to} href={href}>
					<ListItemImage {...imageAttributes} />
					<ListItemHeader mt={3}>
						<ListItemTitle {...titleAttributes}>{title}</ListItemTitle>
						{subtitle && (
							<Subtitle pb={1} color="#717171">
								{subtitle}
							</Subtitle>
						)}
					</ListItemHeader>
					<ListItemBody>{children}</ListItemBody>
				</LinkWrapper>
				{text && this.renderButton(buttonProps, text)}
			</ListItemContainer>
		);
	}
}

export default ImageListItem;
