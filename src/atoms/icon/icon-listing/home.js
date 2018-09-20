import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ type }) => {
	switch (type) {
		// TODO: outline, colored
		default:
			return (
				<g fill="currentColor">
					<path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z" />
				</g>
			);
	}
};
Home.propTypes = {
	type: PropTypes.string
};
Home.defaultProps = {
	type: 'glyph'
};
export default Home;
