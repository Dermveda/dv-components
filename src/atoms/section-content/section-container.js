import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, flex, flexWrap, flexDirection, justifyContent, alignItems, space, themeGet } from 'styled-system';

const SectionContainer = styled(({
	content,
	centered,
	backgroundImage,
	children,
	...props
}) => <section {...props}>{children}</section>).attrs({
	py: props => props.py ||[3, 4, 6],
	px: props => props.px || [3, 4, 6],
	m: props => props.m || 0
})`
	${color};
	${flex};
	${flexWrap};
	${flexDirection};
	${justifyContent};
	${alignItems};
	${space};

	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;

	${props => props.backgroundImage ? `
		background-image: url('${props.backgroundImage.url}');
		background-repeat: ${props.backgroundImage.pattern ? 'repeat' : 'no-repeat'};
		background-size: ${props.backgroundImage.pattern ? props.backgroundImage.size || 'auto' : 'cover'};
		background-position: ${props.backgroundImage.position || 'center center'};
		background-color: ${props => themeGet(`colors.${props.backgroundImage.color}`, 'transparent')};
	` : `
		background: ${props => themeGet(`backgrounds.${props.type}`, 'transparent')};
	`};
	${props => props.centered ? 'margin: 0 auto' : ''};
	${props => props.content ? 'max-width: 1200px': ''};
`;

SectionContainer.propTypes = {
	type: PropTypes.oneOf(['white', 'gray', 'primary', 'tertiary', 'secondary', 'transparent']),
	centered: PropTypes.bool,
	content: PropTypes.bool
};

SectionContainer.defaultProps = {
	type: 'white',
	centered: false,
	content: false
};

export default SectionContainer;
