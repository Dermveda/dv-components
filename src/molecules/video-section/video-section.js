import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlexBox, Box, HiddenText, Icon, H3, Content } from 'atoms';

import { PlayerDismiss, PlayerContainer, PlayerButton, InfoContainer } from './utils';

export default class VideoPlayer extends Component {
	static propTypes = {
		videoUrl: PropTypes.string.isRequired,
		description: PropTypes.string,
		img: PropTypes.string.isRequired,
		titleAttributes: PropTypes.shape({
			title: PropTypes.string.isRequired
		}).isRequired
	}

	static defaultProps = {
		description: null
	}

	state = {
		showVideo: false,
		showSkeleton: true
	}

	toggleVideoPlayer = () => this.setState(({ showVideo }) => ({
		showVideo: !showVideo,
		showSkeleton: true
	}));

	dismissSkeleton = () => this.setState({ showSkeleton: false });

	generateTitleProps = ({ text, ...titleProps }) => ({
		titleText: text,
		...Object.assign({}, {
			fontSize: [2, 3],
			mb: 2,
			mt: 0,
			fontWeight: 700
		}, titleProps)
	});

	renderVideo = videoUrl => (
		<PlayerContainer onClick={this.toggleVideoPlayer}>
			<PlayerDismiss aria-label="Close Video">
				<Icon name="close" />
			</PlayerDismiss>
			<Box width="80%" flex="1 350px" my="auto" display="inline-block" maxHeight="350px" position="relative">
				{this.state.showSkeleton && (
					<Box
						height="100%"
						width="100%"
						position="absolute"
						top={0}
						left={0}
						className="pending"
					/>
				)}
				<Box
					is="iframe"
					height="100%"
					width="100%"
					allow="autoplay; encrypted-media"
					allowFullscreen
					onLoad={this.dismissSkeleton}
					src={videoUrl}
					border="none"
				/>
			</Box>
		</PlayerContainer>
	)

	render = () => {
		const { videoUrl, titleAttributes, description, img, ...props } = this.props;
		const { titleText, ...titleProps } = this.generateTitleProps(titleAttributes);

		return (
			<FlexBox display="flex" {...props}>
				<InfoContainer>
					<PlayerButton img={img} onClick={this.toggleVideoPlayer}>
						<Icon name="player" color="white" iconSize="lg" />
						<HiddenText>{titleText}</HiddenText>
					</PlayerButton>
					<div>
						<H3 {...titleProps}>{titleText}</H3>
						<Content fontSize={[1, 2]} m={0}>
							{description}
						</Content>
					</div>
				</InfoContainer>
				{this.state.showVideo && this.renderVideo(videoUrl)}
			</FlexBox>
		);
	}
}
