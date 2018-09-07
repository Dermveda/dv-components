import React from 'react';
import PropTypes from 'prop-types';
import { createSkeletonElement } from '@trainline/react-skeletor';
import styled from 'styled-components';
import { textAlign } from 'styled-system';
import { fontSize } from 'utils';

const makeTitleContainer = styled('h3').attrs({
	fontSize: [1, 1, 2],
	textAlign: props => props.textAlign || undefined
})`
	@media (max-width: 320px) {
		font-size: 0.7rem;
	}
	${fontSize};
	${textAlign};
`;

const TitleContainer = createSkeletonElement(makeTitleContainer);

const Title = ({ title, attrs }) => {
	if (!title) return null;
	return <TitleContainer {...attrs}>{title}</TitleContainer>;
};

Title.propTypes = {
	title: PropTypes.string,
	attrs: PropTypes.object
};

export default Title;
