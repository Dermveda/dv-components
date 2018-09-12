import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Section, InlineForm } from 'molecules';
import { Box, FlexBox } from 'atoms';

class SignUpCTA extends Component {
	static propTypes = {
		onSubscribe: PropTypes.func,
		isSubscribing: PropTypes.bool,
		newsletter: PropTypes.string
	};

	state = { success: false };

	componentDidUpdate = prevProps => {
		if (!this.props.isSubscribing && this.props.isSubscribing !== prevProps.isSubscribing) this.setState({ success: true });
	};

	renderSubscribe = ({ buttonText, title, messageText, isSubscribing, recentList, newsletter }) => (
		<Section content centered title={title} titleAttributes={{ fontSize: [3, 4] }} bodyAttributes={{ textAlign: 'center' }}>
			<Box textAlign="center">{messageText}</Box>
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
		</Section>
	);

	renderSignUp = ({ title, messageText, buttonText }) => (
		<Section
			title={title}
			content
			centered
			titleAttributes={{ fontSize: [3, 4] }}
			buttonAttributes={{
				to: '/sign-up',
				text: buttonText,
				type: 'primary',
				raised: true,
				noButtonSpacing: true
			}}>
			<Box pb={3} textAlign="center">
				{messageText}
			</Box>
		</Section>
	);

	render = () => (this.props.newsletter ? this.renderSubscribe(this.props) : this.renderSignUp(this.props));
}

export default SignUpCTA;
