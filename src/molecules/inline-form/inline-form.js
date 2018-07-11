import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, ArrowButton, HiddenText, InlineFormContainer, Label, Box } from 'atoms';

export default class InlineForm extends Component {
	static propTypes = {
		inputAttributes: PropTypes.shape({
			type: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		}).isRequired,
		inputValue: PropTypes.string,
		buttonAttributes: PropTypes.shape({
			type: PropTypes.string
		}),
		buttonText: PropTypes.string,
		onSubmit: PropTypes.func.isRequired,
		successMessage: PropTypes.string,
		success: PropTypes.bool,
		loading: PropTypes.bool,
		isPromise: PropTypes.bool,
		label: PropTypes.string.isRequired
	}

	static defaultProps = {
		inputValue: '',
		success: false,
		isPromise: false,
		loading: false,
		buttonAttributes: {
			type: 'primary'
		},
		buttonText: 'Submit',
		successMessage: 'Successfully Submitted!'
	}

	state = {
		inputValue: this.props.inputValue,
		submitting: false,
		error: false,
		success: false
	}

	handleInput = ({ target }) => this.setState({ inputValue: target.value })

	handleSubmit = (e) => {
		if (e.target.checkValidity()) {
			this.resetStatus();
			e.preventDefault();
			if (this.props.isPromise) {
				this.setState({ submitting: true });
				this.props.onSubmit(this.state.inputValue)
					.then(() => this.setState({ submitting: false, success: true }))
					.catch(() => this.setState({ submitting: false, error: true }));
			} else {
				this.props.onSubmit(this.state.inputValue);
			}
		}
	}

	makeContentAttributes = (success) => ({
		display: 'flex',
		fontWeight: 600,
		fontSize: 2,
		my: '12px',
		is: 'p',
		color: `status.${success ? 'success' : 'error'}`
	});

	resetStatus = () => this.setState({ success: false, error: false });

	renderSuccessMessage = () => (
		<Box {...this.makeContentAttributes(true)}>
			<Box mr={3} aria-hidden>&#x1F64C;</Box>
			{this.props.successMessage}
			<Box ml={3} aria-hidden>&#x1F64C;</Box>
		</Box>
	)

	render() {
		const { inputAttributes, label, buttonAttributes, buttonText, success, loading, ...props } = this.props;
		const { success: successState, error } = this.state;
		if (success || successState) return this.renderSuccessMessage();
		return (
			<React.Fragment>
				<InlineFormContainer onSubmit={this.handleSubmit} {...props}>
					<Label m="0" pb="0" display="flex">
						<HiddenText>{label}</HiddenText>
						<Input
							value={this.state.inputValue}
							onChange={this.handleInput}
							required
							placeholder={label}
							ref={(input) => { this.input = input; }}
							{...inputAttributes}
						/>
					</Label>
					<ArrowButton
						raised={false}
						squared
						onClick={this.handleSubmit}
						spin={loading || this.state.submitting}
						{...buttonAttributes}
					>
						{buttonText}
					</ArrowButton>
				</InlineFormContainer>
				{error && (
					<Box {...this.makeContentAttributes(false)}>
						<Box mr={3} aria-hidden>&#x1F614;</Box>
						Something went wrong, please try again.
					</Box>
				)}
			</React.Fragment>
		);
	}
}
