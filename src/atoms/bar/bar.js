import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import sys from 'system-components';
import tag from 'clean-tag';
import { themeGet, color, space, flexDirection, justifyContent, display } from 'styled-system';
import { fontSize } from 'utils';

// const MakeBar = sys(
// 	{
// 		flexWrap: 'wrap',
// 		alignItems: 'center',
// 		position: 'sticky'
// 	},
// 	'color',
// 	'space',
// 	'flexDirection',
// 	'justifyContent',
// 	'display'
// );

const Bar = styled(tag.div).attrs({
	display: props => props.display || 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
	position: 'sticky'
})`
	top: ${props => props.top};
	z-index: ${props => props.zIndex};
	${fontSize};
	${color};
	${space};
	${flexDirection};
	${justifyContent};
	${display};
`;

Bar.propTypes = {
	top: PropTypes.number,
	zIndex: PropTypes.number
};

Bar.defaultProps = {
	top: 0,
	zIndex: 100
};

Bar.displayName = 'Bar';

export default Bar;
