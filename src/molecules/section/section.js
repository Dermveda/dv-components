import React, { Component } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import PropTypes from 'prop-types';
import { SectionTitle, SectionBody, SectionContainer, Button, ButtonLink } from 'atoms';

class Section extends Component {
	static propTypes = {
		buttonAttributes: PropTypes.shape({
			text: PropTypes.string,
			noButtonSpacing: PropTypes.bool
		}),
		titleAttributes: PropTypes.shape({
			color: PropTypes.string
		}),
		imageAttributes: PropTypes.shape({
			img: PropTypes.string,
			alt: PropTypes.string
		}),
		title: PropTypes.string,
		children: PropTypes.node,
		backgroundImage: PropTypes.object,
		bodyAttributes: PropTypes.object
	};

	static defaultProps = {
		buttonAttributes: { text: null },
		imageAttributes: null,
		title: null,
		titleAttributes: {},
		children: null,
		backgroundImage: null,
		bodyAttributes: {}
	};

	static ButtonContainer = styled.div`
		${space};
		width: 100%;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: ${props => (props.alignLeft ? 'flex-start' : 'center')};
	`;

	renderButton = (buttonProps, text) =>
		buttonProps.onClick ? <Button {...buttonProps}>{text}</Button> : <ButtonLink {...buttonProps}>{text}</ButtonLink>;

	render() {
		const { buttonAttributes, title, children, titleAttributes, bodyAttributes, imageAttributes, ...attrs } = this.props;
		const { text, noButtonSpacing, buttonLeft, ...buttonProps } = buttonAttributes;

		return (
			<SectionContainer {...attrs}>
				{imageAttributes && <img {...imageAttributes} />}
				{title && <SectionTitle {...titleAttributes}>{title}</SectionTitle>}
				{children && <SectionBody {...bodyAttributes}>{children}</SectionBody>}
				{text && (
					<Section.ButtonContainer alignLeft={buttonLeft} pt={noButtonSpacing ? 0 : [3, 4, 6]}>
						{this.renderButton(buttonProps, text)}
					</Section.ButtonContainer>
				)}
			</SectionContainer>
		);
	}
}

export default Section;
