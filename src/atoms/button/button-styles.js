import { css } from 'styled-components';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import { space, border, display, themeGet } from 'styled-system';
import { fontSize } from 'utils';
import { outline, raised, nostyle } from 'styles';

const hoverStyles = css`
	&:hover:not(:active):not(:focus) {
		background: ${props => darken(0.2, themeGet(`colors.${props.type}.main`)(props))};
	}
	&:active,
	&:focus {
		background: ${props => themeGet(`colors.${props.type}.main`)(props)};
	}
`;

const gradient = css`
	background: ${props =>
		`linear-gradient(to bottom, ${themeGet(`colors.gradient.${props.type}.0`)(props)}, ${themeGet(`colors.gradient.${props.type}.1`)(props)})`};
	&:hover:not(:active):not(:focus) {
		background-position: 0 8px;
	}
	&:active,
	&:focus {
		background-position: 0;
	}
`;

export const buttonProps = {
	type: PropTypes.oneOf(['primary', 'secondary', 'bold', 'tertiary']),
	gradient: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	outline: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	nostyle: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	squared: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	large: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	small: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	raised: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

export const buttonDefaultProps = {
	type: 'primary',
	raised: false,
	nostyle: false,
	gradient: false,
	outline: false,
	squared: false,
	large: false,
	small: false
};

export const buttonCSS = css`
	${border};
	${fontSize};
	${display};

	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	font-weight: 600;

	text-decoration: none !important;
	cursor: pointer;

	border-radius: ${props => !props.squared && '8px'};
	border: 0;

	transition: all 0.2s ease-in-out;

	background: ${props => themeGet(`colors.${props.type}.main`, '#f7f7f7')};
	color: ${props => themeGet(`colors.${props.type}.secondary`, '#2b2b2b')};

	& > svg {
		margin-left: 8px;
		transition: all 0.2s ease-in-out;
	}

	&:hover,
	&:active,
	&:focus {
		outline: 0;
		color: ${props => themeGet(`colors.${props.type}.secondary`, '#2b2b2b')} !important;
	}

	${props => !props.raised && !props.nostyle && !props.gradient && !props.white && hoverStyles};
	${props => props.nostyle && nostyle};
	${props => props.raised && raised};
	${props => props.gradient && gradient};
	${props => props.outline && outline};
	${props =>
		props.outline &&
		css`
			box-shadow: none;
			&:hover {
				color: ${themeGet(`colors.${props.type}.secondary`)(props)} !important;
				background-color: ${themeGet(`colors.${props.type}.main`)(props)};
				background: ${props.gradient && themeGet(`colors.gradient.${props.type}`)(props)};
				border-color: transparent;

				svg {
					color: ${themeGet(`colors.${props.type}.secondary`)(props)};
					stroke: ${themeGet(`colors.${props.type}.secondary`)(props)};
					fill: ${themeGet(`colors.${props.type}.secondary`)(props)};
				}
			}
		`};
	${space};
	${props =>
		props.white &&
		`
		border-color: white;
		color: white;
		background-color: transparent;

		&:hover {
			background: rgba(0, 0, 0, 0.2);
		}

		&:focus, &:active {
			background: rgba(0, 0, 0, 0.4);
		}
	`};
`;

export const buttonAttributes = {
	fontSize: ({ large, xs, fontSize }) => {
		if (xs) return fontSize || 1;
		return fontSize || (large ? 3 : 2);
	},
	py: ({ xs }) => {
		if (xs) return 1;
		return 2;
	},
	px: ({ xs }) => {
		if (xs) return 2;
		return 3;
	}
};
