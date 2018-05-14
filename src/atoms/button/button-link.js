import { themeGet } from 'styled-system';
import { nostyle } from 'styles';
import Button from './button';

const Link = Button.withComponent('a');
const ButtonLink = Link.extend`
	text-decoration: none;
	color: ${props => themeGet(`colors.${props.type}.secondary`, '#2b2b2b')};

	&:hover {
		color: ${props => themeGet(`colors.${props.type}.secondary`, '#2b2b2b')};
		text-decoration: none;
	}

	${props => props.nostyle && nostyle};
`;

export default ButtonLink;
