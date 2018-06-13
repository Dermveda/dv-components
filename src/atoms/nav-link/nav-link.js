import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { space, themeGet, color } from 'styled-system';
import { darken } from 'polished';
import { fontSize } from 'utils';

const NavLink = styled(RouterLink).attrs({
	fontSize: 2,
	py: props => props.py || 2,
	px: props => props.px || 4,
	mx: 2,
	color: props => props.color || 'gray.medium'
})`
	${space};
	${fontSize};
	${color};
	text-align: center;
	font-weight: 600;
	letter-spacing: .03rem;
	transition: all .15s linear;

	${props => props.leftBorder ? `
		border-left: 1px solid transparent;
	` : `
		border-bottom: 1px solid transparent;
	`}
	text-decoration: none;

	&:hover {
		color: ${props => darken(0.2, themeGet('colors.primary.main')(props))};
		text-decoration: none;
		border-color: ${props => darken(0.2, themeGet('colors.primary.main')(props))};
	}

	&.active {
		color: ${props => darken(0.2, themeGet('colors.primary.main')(props))};
		text-decoration: none;
		border-color: ${props => darken(0.2, themeGet('colors.primary.main')(props))};
	}

`;

export default NavLink;
