import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlexBox, Box, H3, Content } from 'atoms';

import { InfoContainer, PlayerText } from './utils';

export default class VideoPlayer extends Component {
	static propTypes = {
		videoUrl: PropTypes.string.isRequired,
		description: PropTypes.string,
		titleAttributes: PropTypes.shape({
			title: PropTypes.string
		})
	};

	static defaultProps = {
		description: null
	};

	generateTitleProps = ({ text, ...titleProps }) => ({
		titleText: text,
		...Object.assign(
			{},
			{
				fontSize: [2, 3],
				mb: 2,
				mt: 0,
				fontWeight: 700
			},
			titleProps
		)
	});

	renderPlayerText = ({ titleAttributes, description }) => {
		if (!titleAttributes) return null;
		const { titleText, ...titleProps } = this.generateTitleProps(titleAttributes);
		return (
			<PlayerText>
				{titleText && <H3 {...titleProps}>{titleText}</H3>}
				<Content fontSize={[1, 2]} m={0}>
					{description}
				</Content>
			</PlayerText>
		);
	};

	render = () => {
		const { videoUrl, titleAttributes, description, img, ...props } = this.props;
		return (
			// <FlexBox display="flex" {...props}>
			<InfoContainer {...props}>
				{this.renderPlayerText(this.props)}

				<Box
					is="iframe"
					height={[127, 170]}
					width={[225, 300]}
					allow="autoplay; encrypted-media; fullscreen"
					src={`${videoUrl}?modestbranding=1`}
					border="none"
				/>
			</InfoContainer>
			// </FlexBox>
		);
	};
}
