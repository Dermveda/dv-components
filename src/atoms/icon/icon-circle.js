import React from 'react';
import sys from 'system-components';
import PropTypes from 'prop-types';
import { adjustHue } from 'polished';
import { themeGet } from 'styled-system';
import { Icon } from '.';

const IconWrapper = sys({
	is: 'div',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	p: 3,
	borderRadius: '50%'
}, (props => `
	background: linear-gradient(
		to bottom,
		${themeGet(`colors.gradient.${props.type}.0`)(props)},
		${adjustHue(10, themeGet(`colors.gradient.${props.type}.0`)(props))}
	);

	svg g {
		color: ${themeGet(`colors.${props.type}.secondary`)(props)};
		stroke: ${themeGet(`colors.${props.type}.secondary`)(props)};
	}
`));

const IconCircle = ({ background, ...props }) => (
	<IconWrapper type={background}>
		<Icon {...props} />
	</IconWrapper>
);

IconCircle.propTypes = {
	background: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
};

IconCircle.defaultProps = {
	background: 'primary'
};

export default IconCircle;
