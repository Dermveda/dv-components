import { css } from 'styled-components';
import { themeGet } from 'styled-system';
import { darken } from 'polished';

const nostyle = css`
	background: transparent;
	border-color: transparent;
	color: ${props => themeGet(`colors.${props.type}.${props.type === 'secondary' ? 'secondary' : 'main'}`)(props)};
	padding: 8px 0 !important;

	svg {
		color: ${props => themeGet(`colors.${props.type}.main`)(props)};
		stroke: ${props => themeGet(`colors.${props.type}.main`)(props)};
	}

	&:hover {
		color: ${props => darken(0.2, themeGet(`colors.${props.type}.main`)(props))} !important;

		svg {
			color: ${props => darken(0.2, themeGet(`colors.${props.type}.main`)(props))};
			stroke: ${props => darken(0.2, themeGet(`colors.${props.type}.main`)(props))};
		}
	}
`;

export default nostyle;
