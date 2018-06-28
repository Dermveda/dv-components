import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<path fill="#43A6DD" d="M42.78,9.375C42.59,9.138,42.304,9,42,9H8v20h30c0.469,0,0.874-0.326,0.977-0.783l4-18 C43.042,9.921,42.97,9.611,42.78,9.375z" />
					<path fill="#B3B3B3" d="M46,35H8c-0.553,0-1-0.448-1-1V5H2C1.447,5,1,4.552,1,4s0.447-1,1-1h6c0.553,0,1,0.448,1,1v29h37 c0.553,0,1,0.448,1,1S46.553,35,46,35z" />
					<path fill="#223E49" d="M13,37c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S15.209,37,13,37z" />
					<path fill="#223E49" d="M40,37c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S42.209,37,40,37z" />
					<circle fill="#FFFFFF" cx="13" cy="41" r="2" />
					<circle fill="#FFFFFF" cx="40" cy="41" r="2" />
				</g>
			);
		case 'outline':
			return (
				<g fill="currentColor">
					<polyline fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" points="2,2 8,2 8,32 46,32 " strokeLinejoin="miter" />
					<circle data-color="color-2" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" cx="12" cy="42" r="4" strokeLinejoin="miter" />
					<circle data-color="color-2" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" cx="42" cy="42" r="4" strokeLinejoin="miter" />=
					<polyline fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" points="8,8 42,8 38,26 8,26 " strokeLinejoin="miter" />
				</g>
			);
		default:
			return (
				<g fill="currentColor">
					<path fill="currentColor" d="M46,31H9v-4h29c0.5,0,0.9-0.3,1-0.8l4-18c0.1-0.3,0-0.6-0.2-0.8C42.6,7.1,42.3,7,42,7H9V2c0-0.6-0.4-1-1-1H2 C1.4,1,1,1.4,1,2s0.4,1,1,1h5v29c0,0.6,0.4,1,1,1h38c0.6,0,1-0.4,1-1S46.6,31,46,31z" />
					<path data-color="color-2" fill="currentColor" d="M12,37c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S14.8,37,12,37z" />
					<path data-color="color-2" fill="currentColor" d="M42,37c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S44.8,37,42,37z" />
				</g>
			);
	}
};

Cart.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline']),
};

Cart.defaultProps = {
	type: 'glyph'
};

export default Cart;
