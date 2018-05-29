import React from 'react';
import PropTypes from 'prop-types';

const BookStack = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<path fill="#E86C60" d="M12,5H2C1.44772,5,1,5.44772,1,6v27h12V6C13,5.44772,12.55229,5,12,5z" />
					<path fill="#444444" d="M12,43H2c-0.55228,0-1-0.44772-1-1V32h12v10C13,42.55228,12.55229,43,12,43z" />
					<path fill="#FFFFFF" d="M8,23H6c-0.55228,0-1-0.44772-1-1V11c0-0.55229,0.44772-1,1-1h2c0.55229,0,1,0.44771,1,1v11 C9,22.55228,8.55229,23,8,23z" />
					<path fill="#43A6DD" d="M35.44301,3.67613l-9.68988,2.47109c-0.53516,0.13647-0.85835,0.68094-0.72188,1.2161l6.67194,26.16267 l11.62785-2.96531L36.6591,4.398C36.52263,3.86285,35.97816,3.53965,35.44301,3.67613z" />
					<path fill="#444444" d="M44.83315,40.49766l-9.68988,2.47109c-0.53516,0.13647-1.07962-0.18672-1.21609-0.72188l-2.47109-9.68988 l11.62785-2.96531l2.47109,9.68987C45.69151,39.81672,45.36831,40.36118,44.83315,40.49766z" />
					<path fill="#FFFFFF" d="M36.01502,22.10634l-1.93797,0.49422c-0.53516,0.13647-1.07962-0.18672-1.2161-0.72188l-2.7182-10.65886 c-0.13647-0.53516,0.18672-1.07962,0.72188-1.2161L32.8026,9.5095c0.53516-0.13647,1.07962,0.18672,1.2161,0.72188l2.7182,10.65886 C36.87337,21.4254,36.55017,21.96987,36.01502,22.10634z" />
					<path fill="#E6E6E6" d="M24,5H14c-0.55229,0-1,0.44772-1,1v27h12V6C25,5.44772,24.55228,5,24,5z" />
					<path fill="#B3B3B3" d="M24,43H14c-0.55229,0-1-0.44772-1-1V32h12v10C25,42.55228,24.55228,43,24,43z" />
					<path fill="#FFFFFF" d="M20,23h-2c-0.55228,0-1-0.44772-1-1V11c0-0.55229,0.44772-1,1-1h2c0.55228,0,1,0.44771,1,1v11 C21,22.55228,20.55228,23,20,23z" />
				</g>
			);
		case 'outline':
			return (
				<g fill="currentColor">
					<line data-cap="butt" data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" x1="2" y1="32" x2="14" y2="32" strokeLinejoin="miter" strokeLinecap="butt" />
					<line data-cap="butt" data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" x1="14" y1="32" x2="26" y2="32" strokeLinejoin="miter" strokeLinecap="butt" />
					<line data-cap="butt" data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" x1="31.509" y1="32.107" x2="43.402" y2="30.509" strokeLinejoin="miter" strokeLinecap="butt" />
					<rect x="2" y="4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" width="12" height="40" strokeLinejoin="miter" />
					<line data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="8" y1="10" x2="8" y2="20" strokeLinejoin="miter" />
					<rect x="14" y="4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" width="12" height="40" strokeLinejoin="miter" />
					<line data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="20" y1="10" x2="20" y2="20" strokeLinejoin="miter" />
					<rect x="30.391" y="3.379" transform="matrix(0.9911 -0.1331 0.1331 0.9911 -2.7886 5.0529)" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" width="12" height="40" strokeLinejoin="miter" />
					<line data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="34.527" y1="9.504" x2="35.858" y2="19.415" strokeLinejoin="miter" />
				</g>
			);
		default:
			return (
				<g fill="currentColor">
					<path fill="currentColor" d="M13,31V4c0-0.553-0.448-1-1-1H2C1.448,3,1,3.447,1,4v27H13z M6,10c0-0.553,0.448-1,1-1s1,0.447,1,1v8 c0,0.553-0.448,1-1,1s-1-0.447-1-1V10z" />
					<path data-color="color-2" fill="currentColor" d="M1,33v11c0,0.553,0.448,1,1,1h10c0.552,0,1-0.447,1-1V33H1z" />
					<path fill="currentColor" d="M27,31V4c0-0.553-0.448-1-1-1H16c-0.552,0-1,0.447-1,1v27H27z M20,10c0-0.553,0.448-1,1-1s1,0.447,1,1v8 c0,0.553-0.448,1-1,1s-1-0.447-1-1V10z" />
					<path data-color="color-2" fill="currentColor" d="M15,33v11c0,0.553,0.448,1,1,1h10c0.552,0,1-0.447,1-1V33H15z" />
					<path data-color="color-2" fill="currentColor" d="M33.343,33.274l1.643,10.876C35.06,44.645,35.487,45,35.973,45c0.05,0,0.1-0.004,0.151-0.011 l9.888-1.493c0.262-0.04,0.498-0.183,0.655-0.396c0.158-0.214,0.224-0.48,0.184-0.743l-1.643-10.876L33.343,33.274z" />
					<path fill="currentColor" d="M44.909,29.503L40.876,2.806c-0.082-0.546-0.59-0.915-1.138-0.84l-9.888,1.493 c-0.262,0.04-0.498,0.183-0.655,0.396c-0.158,0.214-0.224,0.48-0.184,0.743l4.033,26.697L44.909,29.503z M35.69,8.646 c0.547-0.075,1.056,0.294,1.138,0.84l1.195,7.91c0.083,0.546-0.293,1.056-0.839,1.139c-0.051,0.007-0.101,0.011-0.151,0.011 c-0.486,0-0.913-0.355-0.987-0.851l-1.195-7.91C34.769,9.238,35.145,8.729,35.69,8.646z" />
				</g>
			);
	}
};

BookStack.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline']),
};

BookStack.defaultProps = {
	type: 'glyph'
};

export default BookStack;
