import React from 'react';
import sys from 'system-components';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet, width, space } from 'styled-system';

const SystemSection = sys('color', 'flex', 'flexWrap', 'flexDirection', 'justifyContent', 'alignItems', 'space', 'maxWidth', 'display');

const SectionContainer = styled(
	({ content /* eslint-disable-line */, centered /* eslint-disable-line */, backgroundImage /* eslint-disable-line */, children, ...props }) => (
		<SystemSection {...props}>{children}</SystemSection>
	)
).attrs({
	py: props => props.py || [5, 4, 6],
	px: props => props.px || [3, 4, 6],
	m: props => props.m || 0,
	is: props => props.is || 'section',
	display: props => props.display || 'flex',
	justifyContent: props => props.justifyContent || 'center'
})`
	flex-flow: column nowrap;
	align-items: center;

	${props =>
		props.backgroundImage
			? `
		background-image: url('${props.backgroundImage.url}');
		background-repeat: ${props.backgroundImage.pattern ? 'repeat' : 'no-repeat'};
		background-size: ${props.backgroundImage.pattern ? props.backgroundImage.size || 'auto' : 'cover'};
		background-position: ${props.backgroundImage.position || 'center center'};
		background-color: ${props => themeGet(`colors.${props.backgroundImage.color}`, 'transparent')};
	`
			: `
		background: ${props => themeGet(`backgrounds.${props.type}`, 'transparent')};
	`};
	${props =>
		props.centered &&
		`
		margin-left: auto !important;
		margin-right: auto !important;
	`};
	${props => (props.content ? 'max-width: 1200px' : '')};
	${width};
	${props => (props.pb !== undefined ? `padding-bottom: ${props.pb}` : '')};
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
