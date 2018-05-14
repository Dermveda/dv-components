import { css } from 'styled-components';
import { themeGet } from 'styled-system';
import { darken } from 'polished';

const color = props =>
	darken(0.2, themeGet(`colors.${props.type}.${props.type === 'secondary' ? 'secondary' : 'main'}`)(props));

const outline = css`
	color: ${color}

	background: transparent;

	font-weight: 600;

	border-width: 1px;
	border-style: solid;
	border-color: ${props => themeGet(`colors.${props.type}.${props.type === 'secondary' ? 'secondary' : 'main'}`)(props)};

	svg {
		stroke: ${color};
		fill: ${color};
		color: ${color};
	}
`;

export default outline;
