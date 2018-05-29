import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<path fill="#EA9860" d="M45,26H3c-0.55228,0-1-0.44772-1-1v-2c0-0.55228,0.44772-1,1-1h42c0.55228,0,1,0.44772,1,1v2 C46,25.55228,45.55228,26,45,26z" />
					<path fill="#EA9860" d="M45,12H3c-0.55228,0-1-0.44771-1-1V9c0-0.55229,0.44772-1,1-1h42c0.55228,0,1,0.44771,1,1v2 C46,11.55229,45.55228,12,45,12z" />
					<path fill="#EA9860" d="M45,40H3c-0.55228,0-1-0.44772-1-1v-2c0-0.55228,0.44772-1,1-1h42c0.55228,0,1,0.44772,1,1v2 C46,39.55228,45.55228,40,45,40z" />
				</g>
			);
		case 'outline':
			return (
				<g fill="currentColor">
					<line data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="2" y1="24" x2="46" y2="24" strokeLinejoin="miter" />
					<line fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="2" y1="10" x2="46" y2="10" strokeLinejoin="miter" />
					<line fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="2" y1="38" x2="46" y2="38" strokeLinejoin="miter" />
				</g>
			);
		default:
			return (
				<g fill="currentColor">
					<rect data-color="color-2" x="2" y="22" fill="currentColor" width="44" height="4" />
					<rect x="2" y="8" fill="currentColor" width="44" height="4" />
					<rect x="2" y="36" fill="currentColor" width="44" height="4" />
				</g>
			);
	}
};

Menu.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline']),
};

Menu.defaultProps = {
	type: 'glyph'
};

export default Menu;
