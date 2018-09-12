import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, lineHeight, justifyContent, maxHeight, display, height } from 'styled-system';
import { flipOrder } from 'styles';

import { HeroContainer, HeroTitle, HeroSubTitle, HeroBody, HeroImage } from 'atoms';

const FlippedBox = styled.div`
	${flipOrder};
	${space};
	${lineHeight};

	line-height: 1.25;
`;

const ImageContainer = styled('div').attrs({
	maxHeight: props => props.maxHeight || '300px',
	display: props => props.display || 'flex',
	height: props => props.height,
	m: props => props.m
})`
	overflow: hidden;
	flex: 1 30%;
	${display};
	${justifyContent};
	${space};
	${maxHeight};
	${height};
	${space};
`;

const Hero = ({
	title,
	subtitle,
	children,
	imageAttributes,
	imageContainerAttributes,
	type,
	titleAttributes,
	subtitleAttributes,
	bodyAttributes,
	...attrs
}) => {
	return (
		<HeroContainer type={type} {...attrs}>
			<HeroBody {...bodyAttributes}>
				<FlippedBox lineHeight="1.25">
					<HeroTitle {...titleAttributes}>{title}</HeroTitle>
					{subtitle && <HeroSubTitle {...subtitleAttributes}>{subtitle}</HeroSubTitle>}
				</FlippedBox>
				{children}
			</HeroBody>
			{imageAttributes && (
				<ImageContainer {...imageContainerAttributes}>
					<HeroImage {...imageAttributes} />
				</ImageContainer>
			)}
		</HeroContainer>
	);
};

Hero.propTypes = {
	title: PropTypes.string.isRequired,
	titleAttributes: PropTypes.object,
	children: PropTypes.node.isRequired,
	subtitle: PropTypes.string,
	subtitleAttributes: PropTypes.object,
	imageContainerAttributes: PropTypes.object,
	imageAttributes: PropTypes.shape({
		alt: PropTypes.string.isRequired,
		src: PropTypes.string.isRequired
	}),
	bodyAttributes: PropTypes.object,
	type: PropTypes.oneOf(['gray', 'primary', 'secondary', 'tertiary', 'transparent', 'white'])
};

Hero.defaultProps = {
	subtitle: null,
	type: 'transparent',
	imageAttributes: null,
	subtitleAttributes: {}
};

export default Hero;
