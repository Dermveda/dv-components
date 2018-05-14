import React, { Component } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import PropTypes from 'prop-types';
import {
	SectionTitle,
	SectionBody,
	SectionContainer,
	Button,
	ButtonLink
} from 'atoms';

class Section extends Component {
	static propTypes = {
		buttonAttributes: PropTypes.shape({
			text: PropTypes.string
		}),
		titleAttributes: PropTypes.shape({
			color: PropTypes.string
		}),
		title: PropTypes.string.isRequired,
		children: PropTypes.node.isRequired
	}

	static defaultProps = {
		buttonAttributes: { text: null },
		titleAttributes: {}
	}

	static ButtonContainer = styled.div`
		${space};
		width: 100%;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
	`

	renderButton = (buttonProps, text) => (
		buttonProps.onClick ? (
			<Button {...buttonProps}>{text}</Button>
		) : (
			<ButtonLink {...buttonProps}>{text}</ButtonLink>
		)
	)

	render() {
		const {
			buttonAttributes, title, children, titleAttributes, ...attrs
		} = this.props;
		const { text, ...buttonProps } = buttonAttributes;

		return (
			<SectionContainer {...attrs}>
				<SectionTitle {...titleAttributes}>{title}</SectionTitle>
				<SectionBody>{children}</SectionBody>
				{text && (
					<Section.ButtonContainer pt={6}>
						{this.renderButton(buttonProps, text)}
					</Section.ButtonContainer>
				)}
			</SectionContainer>
		);
	}
}

export default Section;
