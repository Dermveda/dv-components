import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { space, border, display, themeGet } from 'styled-system';
import { fontSize } from 'utils';
import { outline, raised, nostyle } from 'styles';
import { darken } from 'polished';

const hoverStyles = css`
	&:hover:not(:active):not(:focus) {
		background: ${props => darken(0.2, themeGet(`colors.${props.type}.main`)(props))};
	}
`;

const gradient = css`
	background: ${props => `linear-gradient(to bottom, ${themeGet(`colors.gradient.${props.type}.0`)(props)}, ${themeGet(`colors.gradient.${props.type}.1`)(props)})`};
	&:hover:not(:active):not(:focus) {
		background-position: 0 8px;
	}
`;

const Button = styled.button.attrs({
	fontSize: ({ large }) => (large ? 3 : 2),
	py: ({ small }) => (small ? 2 : [2, 3]),
	px: ({ small }) => (small ? 3 : [3, 4])
})`
	${space};
	${border};
	${fontSize};
	${display};

	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	font-weight: 600;

	cursor: pointer;

	border-radius: ${props => !props.squared && '8px'};
	border: 0;

	transition: all .2s ease-in-out;

	background: ${props => themeGet(`colors.${props.type}.main`, '#f7f7f7')};
	color: ${props => themeGet(`colors.${props.type}.secondary`, '#2b2b2b')};

	& > svg {
		margin-left: 8px;
		transition: all .2s ease-in-out;
	}

	&:active, &:focus {
		outline: 0;
	}

	${props => (!props.raised && !props.nostyle && !props.gradient && !props.white && hoverStyles)};
	${props => props.nostyle && nostyle};
	${props => props.raised && raised};
	${props => props.gradient && gradient};
	${props => props.outline && outline};
	${props => props.outline && css`
		box-shadow: none;
		&:hover {
			color: ${themeGet(`colors.${props.type}.secondary`)(props)};
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
	${props => props.white && `
		border-color: white;
		color: white;
		background-color: transparent;

		&:hover {
			background: rgba(0, 0, 0, 0.2);
		}

		&:focus, &:active {
			background: rgba(0, 0, 0, 0.4);
		}
	`}
`;

Button.propTypes = {
	type: PropTypes.oneOf(['primary', 'secondary', 'bold', 'tertiary']),
	gradient: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	outline: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	nostyle: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	squared: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	large: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	small: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	raised: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

Button.defaultProps = {
	type: 'primary',
	raised: false,
	nostyle: false,
	gradient: false,
	outline: false,
	squared: false,
	large: false,
	small: false
};

export default Button;
