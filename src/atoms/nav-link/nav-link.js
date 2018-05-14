import styled from 'styled-components';
// import { Link as RouterLink } from 'react-router-dom';
import { space, themeGet } from 'styled-system';
import { darken } from 'polished';
import { fontSize } from 'utils';

const NavLink = styled('a').attrs({
	fontSize: 2,
	py: 2,
	px: 4,
	mx: 2
})`
	${space};
	${fontSize};
	text-align: center;
	font-weight: 600;
	letter-spacing: .03rem;
	color: #2B2B2B;
	transition: all .2s ease-in;
	border-bottom: 1px solid transparent;

	&:hover {
		color: ${props => darken(0.2, themeGet('colors.primary.main')(props))};
		text-decoration: none;
		border-color: ${props => darken(0.2, themeGet('colors.primary.main')(props))};
	}

`;

export default NavLink;
