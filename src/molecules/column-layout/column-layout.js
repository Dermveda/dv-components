import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space, flexDirection } from 'styled-system';

const ImageContainer = styled.div`
	flex: 1 50%;
	text-align: center;

	img {
		max-width: 100%;
	}
`;

const Box = styled.div.attrs({
	flexDirection: ['column', 'column', 'row']
})`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	${space};
	${flexDirection};

	@media (min-width: 1008px) {
		& > *:last-child {
			order: ${props => props.direction === 'left' ? 2 : -1 };
		}
	}
`;

const ChildrenBox = styled.div.attrs({
	p: [5, 6]
})`
	${space};
	box-sizing: border-box;
	flex: 1 50%;
`;

const ColumnLayout = ({ imageAttributes, imageContainerAttributes, children, direction, ...attrs }) => (
	<Box direction={direction} {...attrs}>
		<ImageContainer {...imageContainerAttributes}>
			<img {...imageAttributes} />
		</ImageContainer>
		<ChildrenBox>
			{children}
		</ChildrenBox>
	</Box>
);

ColumnLayout.propTypes = {
	imageAttributes: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired
	}).isRequired,
	imageContainerAttributes: PropTypes.object,
	children: PropTypes.node.isRequried,
	direction: PropTypes.oneOf(['left', 'right'])
};

ColumnLayout.defaultProps = {
	direction: 'left',
	imageContainerAttributes: null
};

export default ColumnLayout;
