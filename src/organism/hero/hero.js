import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, lineHeight } from 'styled-system';
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
`;

const Hero = ({
	title, subtitle, children, imageAttributes, type, subtitleAttributes, ...attrs
}) => (
	<HeroContainer type={type} {...attrs}>
		<HeroBody>
			<FlippedBox lineHeight="1.25">
				<HeroTitle>{title}</HeroTitle>
				{subtitle && <HeroSubTitle {...subtitleAttributes}>{subtitle}</HeroSubTitle>}
			</FlippedBox>
			{children}
		</HeroBody>
		{
			imageAttributes && (
				<ImageContainer>
					<HeroImage {...imageAttributes} />
				</ImageContainer>
			)
		}
	</HeroContainer>
);

Hero.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	subtitle: PropTypes.string,
	subtitleAttributes: PropTypes.object,
	imageAttributes: PropTypes.shape({
		alt: PropTypes.string.isRequired,
		src: PropTypes.string.isRequired
	}),
	type: PropTypes.oneOf(['gray', 'primary', 'secondary', 'tertiary', 'transparent', 'white'])
};

Hero.defaultProps = {
	subtitle: null,
	type: 'transparent',
	imageAttributes: null,
	subtitleAttributes: {}
};

export default Hero;
