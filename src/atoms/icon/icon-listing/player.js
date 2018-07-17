import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<path fill="#ED69AB" d="M43,47H5c-2.20914,0-4-1.79086-4-4V5c0-2.20914,1.79086-4,4-4h38c2.20914,0,4,1.79086,4,4v38 C47,45.20914,45.20914,47,43,47z" />
					<path fill="#FFFFFF" d="M18,33c-0.16211,0-0.32422-0.03906-0.47168-0.11816C17.20312,32.70801,17,32.36914,17,32V16 c0-0.36914,0.20312-0.70801,0.52832-0.88184c0.32422-0.17383,0.71973-0.1543,1.02637,0.0498l12,8 C30.83301,23.35352,31,23.66602,31,24s-0.16699,0.64648-0.44531,0.83203l-12,8C18.3877,32.94336,18.19434,33,18,33z" />
				</g>
			);
		case 'outline':
			return (
				<g fill="currentColor">
					<rect x="2" y="4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" width="44" height="40" strokeLinejoin="miter" />
					<polygon data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points=" 17,14 33,24 17,34 " strokeLinejoin="miter" />
				</g>
			);
		default:
			return (
				<g fill="currentColor">
					<path fill="currentColor" d="M45,3H3C1.895,3,1,3.895,1,5v38c0,1.105,0.895,2,2,2h42c1.105,0,2-0.895,2-2V5C47,3.895,46.105,3,45,3z M33.53,24.848l-16,10C17.368,34.949,17.185,35,17,35c-0.167,0-0.334-0.042-0.484-0.125C16.197,34.698,16,34.363,16,34V14 c0-0.363,0.197-0.698,0.516-0.875c0.315-0.175,0.705-0.167,1.015,0.027l16,10C33.822,23.335,34,23.655,34,24 S33.822,24.665,33.53,24.848z" />
				</g>
			);
	}
};

Player.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline']),
};

Player.defaultProps = {
	type: 'glyph'
};

export default Player;
