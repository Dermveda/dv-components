import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input, ArrowButton, HiddenText } from 'atoms';

const Form = styled.form`
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
`;

const Label = styled.label`
	margin: 0;
	padding: 0;
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
		onSubmit: PropTypes.func.isRequired
	}

	static defaultProps = {
		inputValue: '',
		buttonAttributes: {
			type: 'primary'
		},
		buttonText: 'Submit'
	}

	state = { inputValue: this.props.inputValue }

	handleInput = ({ target }) => this.setState({ inputValue: target.value })

	handleSubmit = (e) => {
		if (e.target.checkValidity()) {
			e.preventDefault();
			this.props.onSubmit(this.state.inputValue);
		}
	}

	render() {
		const { inputAttributes, buttonAttributes, buttonText } = this.props;
		return (
			<Form onSubmit={this.handleSubmit}>
				<Label>
					<HiddenText>test</HiddenText>
					<Input
						value={this.state.inputValue}
						onChange={this.handleInput}
						height="100%"
						required
						ref={(input) => { this.input = input; }}
						{...inputAttributes}
					/>
				</Label>
				<ArrowButton
					raised={false}
					squared
					{...buttonAttributes}
				>
					{buttonText}
				</ArrowButton>
			</Form>
		);
	}
}

export default InlineForm;
