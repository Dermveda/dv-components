import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, lineHeight, justifyContent } from 'styled-system';
import { flipOrder } from 'styles';

import { HeroContainer, HeroTitle, HeroSubTitle, HeroBody, HeroImage } from 'atoms';

const FlippedBox = styled.div`
	${flipOrder};
	${space};
	${lineHeight};

	line-height: 1.25;
`;

const ImageContainer = styled.div`
	max-height: 300px;
	overflow: hidden;
	flex: 1 30%;
	display: flex;
	${justifyContent};
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
}) => (
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
