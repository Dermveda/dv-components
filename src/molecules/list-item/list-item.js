import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItemContainer, ListItemTitle, ListItemBody, ListItemHeader, ArrowButton, ArrowButtonLink, Subtitle, LinkWrapper } from 'atoms';

class ListItem extends Component {
	static propTypes = {
		to: PropTypes.string,
		href: PropTypes.string,
		largeFont: PropTypes.string,
		title: PropTypes.string.isRequired,
		children: PropTypes.node.isRequired,
		subtitle: PropTypes.string,
		buttonAttributes: PropTypes.shape({
			text: PropTypes.string.isRequired,
			nostyle: PropTypes.bool
		})
	};

	static defaultProps = {
		buttonAttributes: {
			nostyle: true
		},
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
		const { title, children, to, href, buttonAttributes, subtitle, largeFont, ...attrs } = this.props;
		const { text, ...buttonProps } = buttonAttributes;
		return (
			<ListItemContainer {...attrs}>
				<LinkWrapper to={to} href={href}>
					<ListItemHeader>
						<ListItemTitle largeFont={largeFont}>{title}</ListItemTitle>
						{subtitle && (
							<Subtitle pb={1} color="#717171" largeFont={largeFont}>
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

export default ListItem;
