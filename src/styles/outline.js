import { css } from 'styled-components';
import { themeGet } from 'styled-system';

const outline = css`
	color: ${props => themeGet(`colors.${props.type}.main`)};
	background: transparent;

	font-weight: 600;

	border-width: 2px;
	border-style: solid;
	border-color: ${props => themeGet(`colors.${props.type}.${props.type === 'secondary' ? 'secondary' : 'main'}`)(props)};
	box-shadow: none;

	svg {
		stroke: ${props => themeGet(`colors.${props.type}.main`)};
		fill: ${props => themeGet(`colors.${props.type}.main`)};
		color: ${props => themeGet(`colors.${props.type}.main`)};
	}

	&:hover {
		color: ${props => themeGet(`colors.${props.type}.secondary`)(props)} !important;
		background-color: ${props => themeGet(`colors.${props.type}.tertiary`)(props)};
		background: ${props => props.gradient && themeGet(`colors.gradient.${props.type}`)(props)};
		border-color: transparent;

		svg {
			color: ${props => themeGet(`colors.${props.type}.secondary`)(props)};
			stroke: ${props => themeGet(`colors.${props.type}.secondary`)(props)};
			fill: ${props => themeGet(`colors.${props.type}.secondary`)(props)};
		}
	}
`;

export default outline;
