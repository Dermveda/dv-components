import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from 'atoms';
import { Section } from 'molecules';

const ImageGrid = styled(Section)`
	& > div {
		display: grid;
		grid-template-columns: ${props => props.direction === 'right' ? 'minmax(700px, 1fr) 1fr' : '1fr minmax(700px, 1fr)'};
		align-items: center;
		padding: 0;

		img {
			width: calc(100% - 16px);
			${props => props.direction === 'left' ? 'margin-right: auto' : 'margin-left: auto' };
		}

		@media (max-width: 1200px) {
			display: flex;
			flex-flow: column nowrap;

			img {
				max-width: 400px;
				order: -1;
				padding: 0;
				margin: 0 auto;
			}

			& > *:first-child {
				padding: 16px;
			}
		}

		${props => props.mobileHide && `
			@media (max-width: 800px) {
				img {
					display: none;
				}
			}
		`};
	}

	margin-left: auto;
	margin-right: auto;
	padding-left: 0;
	padding-right: 0;
`;

const ColumnLayout = ({ imageAttributes, children, direction, ...attrs }) => (
	<ImageGrid direction={direction} {...attrs}>
		{direction === 'left' && <img {...imageAttributes} /> }
		<Box>{children}</Box>
		{direction !== 'left' && <img {...imageAttributes} /> }
	</ImageGrid>
);

ColumnLayout.propTypes = {
	imageAttributes: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired
	}).isRequired,
	children: PropTypes.node.isRequried,
	direction: PropTypes.oneOf(['left', 'right'])
};

ColumnLayout.defaultProps = {
	direction: 'left'
};

export default ColumnLayout;
