import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import { FormContainer, FormGroup, Input, Select, Label, Button } from 'atoms';

const ButtonContainer = styled('div').attrs({ p: 2 })`
	${space};
`;

class Form extends Component {
	static propTypes = {
		inputs: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				label: PropTypes.string,
				type: PropTypes.string,
				options: PropTypes.array,
				placeholder: PropTypes.string,
				initValue: PropTypes.string,
				disabled: PropTypes.bool,
				required: PropTypes.bool
			})
		),
		inputProps: PropTypes.shape({
			gray: PropTypes.bool,
			uppercase: PropTypes.bool
		}),
		formProps: PropTypes.object,
		buttonText: PropTypes.string,
		buttonProps: PropTypes.object,
		onSubmit: PropTypes.func
	};
	constructor(props) {
		super(props);
		this.state = this.initState();
	}
	initState = () => {
		const { inputs } = this.props;
		if (!Array.isArray(inputs)) return null;
		let inputValues = {};
		inputs.forEach(input => {
			inputValues[input.name] = input.initValue || '';
		});
		return inputValues;
	};
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit = e => {
		e.preventDefault();
		const formIsValid = e.target.checkValidity();
		if (formIsValid) this.props.onSubmit(this.state);
		const purgedState = this.initState();
		this.setState({ purgedState });
	};
	renderInputs = () => {
		const { inputs, inputProps } = this.props;
		if (!Array.isArray(inputs)) return null;
		return inputs.map(input => {
			switch (input.type) {
				case 'select':
					return (
						<FormGroup key={`form-input-${input.name}`}>
							<Label>{input.label}</Label>
							<Select
								{...input}
								// type={input.type}
								// options={input.options}
								// name={input.name}
								// placeholder={input.placeholder}
								// required={input.required}
								value={this.state[input.name]}
								onChange={this.onChange}
								{...inputProps}
							/>
						</FormGroup>
					);
				default:
					return (
						<FormGroup key={`form-input-${input.name}`}>
							<Label>{input.label}</Label>
							<Input
								{...input}
								type={input.type}
								name={input.name}
								placeholder={input.placeholder}
								required={input.required}
								value={this.state[input.name]}
								onChange={this.onChange}
								{...inputProps}
							/>
						</FormGroup>
					);
			}
		});
	};
	render() {
		const { buttonText, buttonProps, formProps } = this.props;
		return (
			<FormContainer onSubmit={this.onSubmit} {...formProps}>
				{this.renderInputs()}
				<ButtonContainer>
					<Button {...buttonProps}>{buttonText}</Button>
				</ButtonContainer>
			</FormContainer>
		);
	}
}
export default Form;
