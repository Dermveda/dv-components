import styled from 'styled-components';
import PropTypes from 'prop-types';
import sys from 'system-components';
import { themeGet, space, maxWidth } from 'styled-system';
import { fontSize } from 'utils';

const MakeBar = sys(
	{
		flexWrap: 'wrap',
		alignItems: 'center',
		position: 'sticky'
	},
	'color',
	'space',
	'flexDirection',
	'justifyContent',
	'display'
);

const Bar = styled(MakeBar).attrs({
	display: props => props.display || 'flex',
	mt: props => props.mt
})`
	top: ${props => props.top};
	z-index: ${props => props.zIndex};

	${props =>
		props.navBorder &&
		`
		border-top: 4px solid ${themeGet('colors.accent.logo')(props)};
		border-bottom: 1px solid #ACACAC;
	`};
	${space};
	${fontSize};
	${maxWidth};
`;

Bar.propTypes = {
	/** test */
	top: PropTypes.number,
	/** tesadfdst */
	zIndex: PropTypes.number,
	navBorder: PropTypes.bool
};

Bar.defaultProps = {
	top: 0,
	zIndex: 100,
	navBorder: false
};

Bar.displayName = 'Bar';

export default Bar;
