import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Section, InlineForm, ImageGrid } from 'molecules';
import { Box, FlexBox, ButtonLink } from 'atoms';

class SignUpHero extends Component {
	static propTypes = {
		onSubscribe: PropTypes.func,
		isSubscribing: PropTypes.bool,
		newsletter: PropTypes.string,
		domain: PropTypes.string,
		image: PropTypes.shape({
			secure_url: PropTypes.string
		}),
		imageAlt: PropTypes.string,
		title: PropTypes.string,
		messageText: PropTypes.string
	};

	state = { success: false };

	componentDidUpdate = prevProps => {
		if (!this.props.isSubscribing && this.props.isSubscribing !== prevProps.isSubscribing) this.setState({ success: true });
	};

	renderSubscribe = ({ buttonText, isSubscribing, recentList, newsletter }) => (
		<FlexBox display="flex">
			<InlineForm
				buttonText={buttonText}
				mt={4}
				mx="auto"
				inputAttributes={{
					placeholder: 'Email',
					type: 'email',
					name: 'email',
					required: true
				}}
				onSubmit={this.props.onSubscribe}
				loading={isSubscribing}
				success={this.state.success && recentList === newsletter}
			/>
		</FlexBox>
	);

	renderSignUp = ({ buttonText }) => (
		<Box mt={3}>
			<ButtonLink to="/sign-up" type="primary" raised>
				{buttonText}
			</ButtonLink>
		</Box>
	);

	render = () => {
		const { image = {} } = this.props;
		const { secure_url, ...imageProps } = image;
		return (
			<ImageGrid
				content
				centered
				mobileHide
				direction="right"
				imageAttributes={{
					src: secure_url,
					alt: this.props.imageAlt,
					...imageProps
				}}>
				<Section
					is="div"
					maxWidth="800px"
					p="0px !important"
					display="block"
					titleAttributes={{
						mt: 0,
						lineHeight: 1.25,
						is: 'h1',
						fontSize: [3, 4],
						textAlign: 'left'
					}}
					title={this.props.title}>
					{this.props.messageText}
					{this.props.newsletter ? this.renderSubscribe(this.props) : this.renderSignUp(this.props)}
				</Section>
			</ImageGrid>
		);
	};
}

export default SignUpHero;
