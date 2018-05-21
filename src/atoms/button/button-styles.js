import { css } from 'styled-components';
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

export const buttonCSS = css`
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

	border-radius: ${props => !props.squared ? '8px' : '0'};
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

	${props => (
		props.raised === 'false' &&
		props.nostyle === 'false' &&
		props.gradient === 'false' &&
		props.white === 'false' ? hoverStyles : '')};
	${props => props.nostyle === 'true' ? nostyle : ''};
	${props => props.raised ==='true '? raised : ''};
	${props => props.gradient === 'true' ? gradient : ''};
	${props => props.outline === 'true' ? outline : ''};
	${props => props.outline === 'true' ? css`
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
	` : ''};
	${props => props.white === 'true' ? `
		border-color: white;
		color: white;
		background-color: transparent;

		&:hover {
			background: rgba(0, 0, 0, 0.2);
		}

		&:focus, &:active {
			background: rgba(0, 0, 0, 0.4);
		}
	` : ''}
`;

export const buttonAttributes = {
	fontSize: ({ large }) => (large ? 3 : 2),
	py: ({ small }) => (small ? 2 : [2, 3]),
	px: ({ small }) => (small ? 3 : [3, 4])
};
