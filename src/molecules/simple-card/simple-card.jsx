import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import { LinkWrapper } from 'atoms';
import { Body, Image, Footer } from './components';

const SimpleCardContainer = styled(LinkWrapper)`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	border-radius: 2px;
	&:hover {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	}
	transition: box-shadow 0.1s ease-in-out;
	${space};
`;

const SimpleCard = ({ item, imageContainerAttributes, bodyAttributes, footerProps, renderFooter, footer, ...attrs }) => {
	if (!item) return null;
	return (
		<SimpleCardContainer to={item.to} {...attrs}>
			<Image item={item} attrs={imageContainerAttributes} />
			<Body item={item} attrs={bodyAttributes} />
			<Footer item={item} renderFooter={renderFooter} footerProps={footerProps} footer={footer} />
		</SimpleCardContainer>
	);
};
SimpleCard.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string,
		titleAttributes: PropTypes.object,
		subtitle: PropTypes.string,
		subtitleAttributes: PropTypes.object,
		imageAttributes: PropTypes.shape({
			src: PropTypes.string,
			alt: PropTypes.string,
			attrs: PropTypes.object
		}),
		to: PropTypes.string,
		href: PropTypes.string
	}),
	imageContainerAttributes: PropTypes.object,
	bodyAttributes: PropTypes.object,
	footerProps: PropTypes.array,
	renderFooter: PropTypes.func,
	footer: PropTypes.object
};
export default SimpleCard;
