import React from 'react';
import PropTypes from 'prop-types';
import { color } from 'styled-system';
import { createSkeletonElement } from '@trainline/react-skeletor';
import styled from 'styled-components';
import Section from './section';

const Circle = createSkeletonElement(styled('div')`
	width: 220px;
	height: 220px;
	font-weight: 500;
	background: white;
	border-radius: 50%;
	padding: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-size: 1.2rem;
	box-sizing: border-box;
	${color};

	position: absolute;
	left: 50%;
	top: -170px;
	transform: translateX(-50%);

	@media (max-width: 900px) {
		position: static;
		margin: 0 auto 32px;
		transform: inherit;
	}
`);

const SectionContainer = styled(Section).attrs({
	fontSize: [2, 3],
})`
	& > div {
		text-align: center;
		font-weight: 600;
		font-size: 1.4rem;
	}

	@media(min-width: 900px) {
		margin-top: 40px !important;

		& > div {
			font-size: 1.8rem;

			padding-top: 90px;
			position: relative;
		}
	}
`;

const CircleSection = ({ children, circleAttributes, ...props }) => {
	const { text, ...circleProps } = circleAttributes;
	return (
		<SectionContainer {...props}>
			{circleAttributes && <Circle {...circleProps}>{text}</Circle>}
			{children}
		</SectionContainer>
	);
};

CircleSection.propTypes = {
	children: PropTypes.node,
	circleAttributes: PropTypes.shape({
		text: PropTypes.string.isRequired
	})
};

export default CircleSection;
