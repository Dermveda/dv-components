import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space, display, color } from 'styled-system';

import iconMapper, { icons } from './icon-names';

// size is one of xs, s, md, lg, xl
const iconSize = {
	xs: '16px',
	sm: '24px',
	md: '32px',
	lg: '48px',
	xl: '64px'
};

// stroke width is 1-4
const strokeSize = {
	1: '1px',
	2: '2px',
	3: '3px',
	4: '4px'
};

// when using odd number stroke, we need to transform to stay on grid
const oddStroke = css`
	transform: translateX(0.5px) translateY(0.5px);
`;

const baseStyles = css`
	display: inline-block;
	color: #111111;

	use {
		fill: inherit;
		stroke: none;
	}
`;

const outlineStyles = css`
	fill: none;
	stroke: currentColor;

	use {
		stroke: inherit;
		fill: none;
	}
`;

const alignToText = css`
	display: inline-block;
	width: 1em;
	height: 1em;
	vertical-align: middle;
	position: relative;
	top: -0.0625em;
	stroke: none;
	fill: none;

	use { color: inherit; }
`;

export const SVGWrapper = styled.svg`
	${baseStyles};
	${space};
	${display};

	${prop => prop.type === 'outline' && outlineStyles};
	${prop => prop.alignToText && alignToText};
	${prop => (prop.strokeSize === 1 || prop.strokeSize === 3) && oddStroke};


	height: ${prop => iconSize[prop.iconSize]};
	width: ${prop => iconSize[prop.iconSize]};

	stroke-width: ${prop => strokeSize[prop.strokeSize]};
	${prop => prop.rotate && `
		transform: rotate(${prop.rotate});
	`};
	${color};
`;

const Icon = ({
	name,
	title,
	description,
	type,
	...props
}) => (
	<SVGWrapper type={type} {...props} viewBox="0 0 48 48">
		<g>
			{title && <title>{title}</title>}
			{description && <desc>{description}</desc>}
			{iconMapper(name, type)}
		</g>
	</SVGWrapper>
);

Icon.propTypes = {
	name: PropTypes.oneOf(Object.keys(icons)).isRequired,
	title: PropTypes.string,
	description: PropTypes.string,
	type: PropTypes.oneOf(['glyph', 'outline', 'colored']),
	strokeSize: PropTypes.oneOf([1, 2, 3, 4]),
	iconSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

Icon.defaultProps = {
	title: null,
	description: null,
	type: 'glyph',
	strokeSize: 2,
	iconSize: 'md'
};

export default Icon;
