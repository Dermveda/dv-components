import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import { space, themeGet, color } from 'styled-system';
import { fontSize } from 'utils';
import { noStyleLink } from 'styles';

const TileContainer = styled(Tilt).attrs({
	options: {
		max: 8,
		scale: 0.95
	}
})`
	${space};
	display: flex;
	flex-flow: column nowrap;
	height: 175px;
	background: ${props => props.type ? themeGet(`backgrounds.${props.type}`)(props) : 'transparent'};
	${props => props.imgSrc && `
		background-image: url(${props.imgSrc});
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
	`}
`;

const TileTitle = styled.h3.attrs({
	fontSize: props => props.small ? [1, 2] : [2, 3],
	mb: 0,
	mx: 0,
	p: 3,
	color: props => props.color ? props.color : props.hasImage ? 'white' : 'inherit',
	mt: 'auto'
})`
	${fontSize};
	${color};
	${space};
	font-weight: 600;
`;

const Box = styled.div`
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	${props => props.hasImage && `
		background: linear-gradient(to top, rgba(0, 0, 0, .8), rgba(0, 0, 0, .3), rgba(0, 0, 0, 0));
	`}
`;

const NoStyleLink = styled(Link)`
	${noStyleLink};
	display: block;
	height: 175px;
`;

const Tile = ({
	type,
	imgSrc,
	title,
	titleAttributes,
	to
}) => {
	const tiltOptions = { max: 8, scale: 0.95 };

	return to ? (
		<NoStyleLink to={to}>
			<TileContainer type={type} imgSrc={imgSrc} options={tiltOptions}>
				<Box hasImage={imgSrc.length}>
					<TileTitle hasImage={imgSrc.length} {...titleAttributes}>{title}</TileTitle>
				</Box>
			</TileContainer>
		</NoStyleLink>
	) : (
		<TileContainer type={type} imgSrc={imgSrc} options={tiltOptions}>
			<Box hasImage={imgSrc.length}>
				<TileTitle hasImage={imgSrc.length} {...titleAttributes}>{title}</TileTitle>
			</Box>
		</TileContainer>
	);
};

export default Tile;
