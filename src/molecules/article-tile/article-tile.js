import React from 'react';
import styled from 'styled-components';
import { Card, H3, Subtitle, LinkWrapper } from 'atoms';
import { trimText, modifyCloudinary, fontSize } from 'utils';
import { space, display, flex } from 'styled-system';

const CardGrid = styled(Card)`
	display: flex;
	flex-flow: row wrap;

	max-width: none;
	${flex};

	@media (max-width: 449px) {
		display: flex;
	}

	& > a {
		flex: ${props => props.large ? '1 45%' : '1 120px'};
	}

	& > div {
		flex: ${props => props.large ? '1 55%' : '1'};
	}
`;

const Box = styled.div`
	flex-direction: column;
	box-sizing: border-box;
	${space};
	${display};
	${fontSize};
`;

const DescriptionBox = Box.extend`
	@media(max-width: 449px) {
		display: none;
	}
`;

const ArticleTile = ({
	titleAttributes,
	subtitleAttributes,
	to,
	children,
	description,
	imageAttributes,
	large,
	...props
}) => {
	const { text: titleText, ...titleProps } = titleAttributes;
	const { text: subtitleText, to: subtitleLink = null, ...subtitleProps } = subtitleAttributes;
	const cloudOptions = {
		w: large ? 500 : 150,
		h: large ? 650 : 200,
		c: 'fill',
		g: 'auto'
	};
	return (
		<CardGrid display={['flex', 'grid']} large={large} {...props}>
			{imageAttributes && (
				<LinkWrapper to={to}>
					<picture>
						<source
							media="(max-width: 732px) and (min-width: 655px)"
							srcSet={modifyCloudinary(imageAttributes.src, cloudOptions)}
						/>
						<source
							media="(max-width: 558px) and (min-width: 495px)"
							srcSet={modifyCloudinary(imageAttributes.src, cloudOptions)}
						/>
						<img
							src={imageAttributes.src}
							style={{ width: '100%', height: '100%' }}
						/>
					</picture>
				</LinkWrapper>
			)}
			<Box p={[0, 2]} px={2} pb={2} display="flex">
				<LinkWrapper to={subtitleLink}>
					<Subtitle
						mb="0"
						color="gray.medium"
						fontWeight={700}
						{...subtitleProps}
					>
						{subtitleText}
					</Subtitle>
				</LinkWrapper>
				<LinkWrapper to={to} height="100%">
					<H3
						fontWeight={700}
						mb={2}
						style={{
							hyphens: 'auto',
							wordBreak: 'normal'
						}}
						{...titleProps}
					>
						{trimText(titleText, true, '45')}
					</H3>
					{large && (
						<DescriptionBox fontSize={[1, 2]}>
							{trimText(description, true, '175')}
						</DescriptionBox>
					)}
				</LinkWrapper>
				{children}
			</Box>
		</CardGrid>
	);
};

export default ArticleTile;
