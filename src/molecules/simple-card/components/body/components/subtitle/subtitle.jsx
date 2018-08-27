import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createSkeletonElement } from '@trainline/react-skeletor';
import { fontSize } from 'utils';
import { color } from 'styled-system';

const makeSubtitleContainer = styled('h4').attrs({
	fontSize: [0, 0, 1],
	color: 'gray.medium'
})`
	text-transform: uppercase;
	${fontSize};
	${color};
`;

const SubtitleContainer = createSkeletonElement(makeSubtitleContainer);

const Subtitle = ({ subtitle, attrs }) => {
	if (!subtitle) return null;
	return <SubtitleContainer {...attrs}>{subtitle}</SubtitleContainer>;
};

Subtitle.propTypes = {
	subtitle: PropTypes.string,
	attrs: PropTypes.object
};
export default Subtitle;
