import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color, fontWeight } from 'styled-system';
import { fontSize } from 'utils';
import { Input, ArrowButton, HiddenText } from 'atoms';

const Form = styled.form`
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
	${space};
`;

const Label = styled.label`
	margin: 0;
	padding: 0;
	display: flex;
`;

const EmojiWrapper = styled.div.attrs({
	ariaHidden: true
})`
	${space};
`;

const P = styled.p.attrs({
	fontWeight: 600,
	fontSize: 2,
	my: '12px'
})`
	display: flex;
	color: ${props => props.success ? '#249f58' : '#e74c3c'};
	${fontSize};
	${space};
	${color};
	${fontWeight};
`;

class InlineForm extends Component {
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
		successMessage: PropTypes.string
	}

	static defaultProps = {
		inputValue: '',
		buttonAttributes: {
			type: 'primary'
		},
		buttonText: 'Submit',
		successMessage: 'Successfully Submitted!'
	}

	state = {
		inputValue: this.props.inputValue,
		submitting: false
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

	resetStatus = () => this.setState({ success: false, error: false });

	renderSuccessMessage = () => (
		<P success>
			<EmojiWrapper mr={3}>&#x1F64C;</EmojiWrapper>
			{this.props.successMessage}
			<EmojiWrapper ml={3}>&#x1F64C;</EmojiWrapper>
		</P>
	)

	render() {
		const { inputAttributes, buttonAttributes, buttonText, success, loading, ...props } = this.props;
		const { success: successState, error } = this.state;
		if (success || successState) return this.renderSuccessMessage();
		return (
			<React.Fragment>
				<Form onSubmit={this.handleSubmit} {...props}>
					<Label>
						<HiddenText>test</HiddenText>
						<Input
							value={this.state.inputValue}
							onChange={this.handleInput}
							required
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
				</Form>
				{error && (
					<P success={false}>
						<EmojiWrapper mr={3}>&#x1F614;</EmojiWrapper>
						Something went wrong, please try again.
					</P>
				)}
			</React.Fragment>
		);
	}
}

export default InlineForm;
