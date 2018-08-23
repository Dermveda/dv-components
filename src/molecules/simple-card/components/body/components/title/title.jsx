import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSize } from 'utils';

const TitleContainer = styled('h3').attrs({
	fontSize: [1, 1, 2]
})`
	${fontSize};
	@media (max-width: 320px) {
		font-size: 0.7rem;
	}
`;

const Title = ({ title, attrs }) => {
	if (!title) return null;
	return <TitleContainer {...attrs}>{title}</TitleContainer>;
};

Title.propTypes = {
	title: PropTypes.string,
	attrs: PropTypes.object
};

export default Title;
