import React from 'react';
import styled from 'styled-components';
import { createSkeletonElement } from '@trainline/react-skeletor';
import PropTypes from 'prop-types';
import { Box } from 'atoms';
import { Section } from 'molecules';

const ImageGrid = styled(Section)`
	& > div {
		display: grid;
		grid-template-columns: ${props => props.direction === 'right' ? 'minmax(60%, 1fr) 1fr' : '1fr minmax(60%, 1fr)'};
		align-items: center;
		padding: 0;

		@media (max-width: 1200px) {
			display: flex;
			flex-flow: column nowrap;

			& > *:first-child {
				padding: 16px;
			}
		}
	}

	margin-left: auto;
	margin-right: auto;
	padding-left: 0;
	padding-right: 0;
`;

const Img = createSkeletonElement(styled.img`
	width: calc(100% - 16px);
	${props => props.direction === 'left' ? 'margin-right: auto' : 'margin-left: auto' };

	${props => props.mobileHide && `
		@media (max-width: 800px) {
			img {
				display: none;
			}
		}
	`};

	@media (max-width: 1200px) {
		max-width: 400px;
		order: -1;
		padding: 0;
		margin: 0 auto;
		margin-bottom: 24px;
	}
`);

const SkeletonBox = createSkeletonElement(Box);

const ColumnLayout = ({ imageAttributes, children, direction, mobileHide, ...attrs }) => (
	<ImageGrid direction={direction} {...attrs}>
		{direction === 'left' && <Img direction={direction} mobileHide={mobileHide} {...imageAttributes} /> }
		<SkeletonBox>{children}</SkeletonBox>
		{direction !== 'left' && <Img direction={direction} mobileHide={mobileHide} {...imageAttributes} /> }
	</ImageGrid>
);

ColumnLayout.propTypes = {
	imageAttributes: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired
	}).isRequired,
	mobileHide: PropTypes.bool,
	children: PropTypes.node.isRequried,
	direction: PropTypes.oneOf(['left', 'right'])
};

ColumnLayout.defaultProps = {
	direction: 'left',
	mobileHide: false
};

export default ColumnLayout;
