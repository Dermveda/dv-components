import React from 'react';
import PropTypes from 'prop-types';

const Award = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<polygon fill="#EFD358" points="14,20 4,41 11.13303,39.94172 14.85337,46.11902 24,27 " />
					<polygon fill="#EFD358" points="34,20 44,41 36.86697,39.94172 33.14663,46.11902 24,27 " />
					<path fill="#E86C60" d="M39,16c0-1.69408-0.84812-3.17852-2.13975-4.07663c-0.69671-0.48445-1.03413-1.29907-0.88403-2.13427 c0.27827-1.54838-0.17172-3.19785-1.3696-4.39573c-1.19788-1.19789-2.84736-1.64791-4.39574-1.36965 c-0.83519,0.15009-1.64979-0.18732-2.13424-0.88401C27.17852,1.84812,25.69403,1,24,1s-3.17852,0.84812-4.07664,2.13971 c-0.48445,0.69669-1.29905,1.03411-2.13424,0.88401c-1.54838-0.27826-3.19786,0.17176-4.39574,1.36965 c-1.19788,1.19788-1.64787,2.84735-1.3696,4.39573c0.1501,0.8352-0.18731,1.64982-0.88403,2.13427C9.84812,12.82148,9,14.30592,9,16 s0.84812,3.17852,2.13975,4.07663c0.69671,0.48445,1.03413,1.29907,0.88403,2.13428 c-0.27827,1.54836,0.17172,3.19778,1.3696,4.39566c1.19787,1.19787,2.84733,1.64783,4.3957,1.36958 c0.83521-0.15009,1.64983,0.18733,2.13427,0.88405C20.82144,30.15184,22.30592,31,24,31s3.17856-0.84816,4.07666-2.1398 c0.48444-0.69672,1.29906-1.03414,2.13427-0.88405c1.54837,0.27825,3.19782-0.1717,4.3957-1.36958 c1.19788-1.19788,1.64787-2.84731,1.3696-4.39566c-0.1501-0.83521,0.18731-1.64983,0.88403-2.13428 C38.15188,19.17852,39,17.69408,39,16z" />
					<circle fill="#C94949" cx="24" cy="16" r="7" />
				</g>
			);
		case 'outline':
			return (
				<g fill="currentColor">
					<polyline data-cap="butt" data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" points="12.254,23.621 4,39 12,38 16,44 22.549,29.926 " strokeLinejoin="miter" strokeLinecap="butt" />
					<polyline data-cap="butt" data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" points="35.746,23.621 44,39 36,38 32,44 25.451,29.926 " strokeLinejoin="miter" strokeLinecap="butt" />
					<circle fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="24" cy="16" r="14" strokeLinejoin="miter" />
					<circle fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="24" cy="16" r="4" strokeLinejoin="miter" />
				</g>
			);
		default:
			return (
				<g fill="currentColor">
					<path data-color="color-2" fill="currentColor" d="M9.669,25.106L2.129,38.51c-0.185,0.327-0.17,0.729,0.037,1.042 c0.207,0.312,0.566,0.488,0.944,0.442l8.307-0.923l3.688,7.376C15.275,46.786,15.621,47,16,47s0.725-0.214,0.895-0.553l6.733-13.466 C17.761,32.853,12.626,29.744,9.669,25.106z" />
					<path data-color="color-2" fill="currentColor" d="M38.331,25.106l7.54,13.404c0.185,0.327,0.17,0.729-0.037,1.042 c-0.207,0.312-0.566,0.488-0.944,0.442l-8.307-0.923l-3.688,7.376C32.725,46.786,32.379,47,32,47s-0.725-0.214-0.895-0.553 l-6.733-13.466C30.239,32.853,35.374,29.744,38.331,25.106z" />
					<path fill="currentColor" d="M24,1C15.729,1,9,7.729,9,16s6.729,15,15,15s15-6.729,15-15S32.271,1,24,1z M24,21c-2.757,0-5-2.243-5-5 s2.243-5,5-5s5,2.243,5,5S26.757,21,24,21z" />
				</g>
			);
	}
};

Award.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline']),
};

Award.defaultProps = {
	type: 'glyph'
};

export default Award;
