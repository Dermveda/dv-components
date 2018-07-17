import React from 'react';
import PropTypes from 'prop-types';

const SchoolBuilding = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<path fill="#5B5B5B" d="M24,15c-0.553,0-1-0.448-1-1V2c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v12C25,14.552,24.553,15,24,15z" />
					<path fill="#E86C60" d="M34,11h-9V3h9c0.552,0,1,0.448,1,1v6C35,10.552,34.552,11,34,11z" />
					<path fill="#444444" d="M44,29H5H4c-0.553,0-1,0.448-1,1v16c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V30 C45,29.448,44.553,29,44,29z" />
					<path fill="#B3B3B3" d="M34.625,21.219l-10-8c-0.365-0.292-0.885-0.292-1.25,0l-10,8C13.138,21.409,13,21.696,13,22v7h22v-7 C35,21.696,34.862,21.409,34.625,21.219z" />
					<path fill="#FFFFFF" d="M25,26h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2c0.552,0,1,0.448,1,1v2C26,25.552,25.552,26,25,26z " />
					<path fill="#BADEFC" d="M10,40H8c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2c0.552,0,1,0.448,1,1v2C11,39.552,10.552,40,10,40z"></path> <path fill="#BADEFC" d="M17,40h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2c0.552,0,1,0.448,1,1v2C18,39.552,17.552,40,17,40z " />
					<path fill="#BADEFC" d="M33,40h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2c0.552,0,1,0.448,1,1v2C34,39.552,33.552,40,33,40z " />
					<path fill="#BADEFC" d="M40,40h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2c0.552,0,1,0.448,1,1v2C41,39.552,40.552,40,40,40z " />
					<path fill="#E6E6E6" d="M25,41h-2c-0.552,0-1,0.448-1,1v5h4v-5C26,41.448,25.552,41,25,41z" />
				</g>
			);
		case 'outline':
			return (
				<g fill="currentColor">
					<polyline fill="none" stroke="currentColor"  strokeLinecap="square" strokeMiterlimit="10" points="24,14 24,2 32,2 32,8 24,8 " strokeLinejoin="miter" />
					<polyline data-color="color-2" fill="none" stroke="currentColor"  strokeLinecap="square" strokeMiterlimit="10" points=" 28,46 28,36 20,36 20,46 " strokeLinejoin="miter" />
					<polygon fill="none" stroke="currentColor"  strokeLinecap="square" strokeMiterlimit="10" points="34,30 34,22 24,14 14,22 14,30 2,30 2,46 46,46 46,30 " strokeLinejoin="miter" />
					<rect data-color="color-2" x="8" y="36" fill="none" stroke="currentColor"  strokeLinecap="square" strokeMiterlimit="10" width="4" height="4" strokeLinejoin="miter" />
					<rect data-color="color-2" x="22" y="25" fill="none" stroke="currentColor"  strokeLinecap="square" strokeMiterlimit="10" width="4" height="4" strokeLinejoin="miter" />
					<rect data-color="color-2" x="36" y="36" fill="none" stroke="currentColor"  strokeLinecap="square" strokeMiterlimit="10" width="4" height="4" strokeLinejoin="miter" />
				</g>
			);
		default:
			return (
				<g fill="currentColor">
					<path fill="currentColor" d="M46,29H35v-7c0-0.304-0.138-0.591-0.375-0.781L25,13.519V8h7c0.553,0,1-0.448,1-1V2c0-0.552-0.447-1-1-1h-8 c-0.553,0-1,0.448-1,1v11.519l-9.625,7.7C13.138,21.409,13,21.696,13,22v7H2c-0.553,0-1,0.448-1,1v16c0,0.552,0.447,1,1,1h18V37 c0-0.552,0.447-1,1-1h6c0.553,0,1,0.448,1,1v10h18c0.553,0,1-0.448,1-1V30C47,29.448,46.553,29,46,29z M13,40c0,0.552-0.447,1-1,1H8 c-0.553,0-1-0.448-1-1v-3c0-0.552,0.447-1,1-1h4c0.553,0,1,0.448,1,1V40z M27,29c0,0.552-0.447,1-1,1h-4c-0.553,0-1-0.448-1-1v-3 c0-0.552,0.447-1,1-1h4c0.553,0,1,0.448,1,1V29z M41,40c0,0.552-0.447,1-1,1h-4c-0.553,0-1-0.448-1-1v-3c0-0.552,0.447-1,1-1h4 c0.553,0,1,0.448,1,1V40z" />
				</g>
			);
	}
};

SchoolBuilding.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline']),
};

SchoolBuilding.defaultProps = {
	type: 'glyph'
};

export default SchoolBuilding;
