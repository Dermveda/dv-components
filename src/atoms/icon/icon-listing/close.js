import React from 'react';
import PropTypes from 'prop-types';

const Close = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<path fill="#E86C60" d="M25.41406,24l13.29297-13.29297c0.39062-0.39062,0.39062-1.02344,0-1.41406s-1.02344-0.39062-1.41406,0 L24,22.58594L10.70703,9.29297c-0.39062-0.39062-1.02344-0.39062-1.41406,0s-0.39062,1.02344,0,1.41406L22.58594,24 L9.29297,37.29297c-0.39062,0.39062-0.39062,1.02344,0,1.41406C9.48828,38.90234,9.74414,39,10,39s0.51172-0.09766,0.70703-0.29297 L24,25.41406l13.29297,13.29297C37.48828,38.90234,37.74414,39,38,39s0.51172-0.09766,0.70703-0.29297 c0.39062-0.39062,0.39062-1.02344,0-1.41406L25.41406,24z" />
				</g>
			);
		case 'outline':
			return (
				<g fill="currentColor">
					<line fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="38" y1="10" x2="10" y2="38" strokeLinejoin="miter" />
					<line fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="38" y1="38" x2="10" y2="10" strokeLinejoin="miter" />
				</g>
			);
		default:
			return (
				<g fill="currentColor">
					<path fill="currentColor" d="M37.293,7.595L23.858,21.03L10.423,7.595c-0.391-0.39-1.024-0.391-1.414,0L7.594,9.009 c-0.391,0.391-0.391,1.024,0,1.414L21.03,23.858L7.594,37.293c-0.391,0.391-0.391,1.024,0,1.414l1.414,1.414 c0.391,0.39,1.024,0.39,1.414,0l13.435-13.435l13.435,13.435c0.391,0.39,1.024,0.391,1.414,0l1.414-1.414 c0.391-0.391,0.391-1.024,0-1.414L26.686,23.858l13.435-13.435c0.391-0.391,0.391-1.024,0-1.414l-1.414-1.414 C38.317,7.204,37.683,7.204,37.293,7.595z" />
				</g>
			);
	}
};

Close.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline']),
};

Close.defaultProps = {
	type: 'glyph'
};

export default Close;
