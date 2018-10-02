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
		clearButtonText: PropTypes.string,
		clearButtonProps: PropTypes.object,
		onClear: PropTypes.func,
		buttonText: PropTypes.string,
		buttonProps: PropTypes.object,
		onSubmit: PropTypes.func
	};
	constructor(props) {
		super(props);
		this.state = this.initState();
	}
	initState = isReset => {
		const { inputs } = this.props;
		if (!Array.isArray(inputs)) return null;
		let inputValues = {};
		inputs.forEach(input => {
			if (isReset) return (inputValues[input.name] = '');
			return (inputValues[input.name] = input.initValue || '');
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
	};
	onReset = handleReset => {
		const purgedState = this.initState(true);
		this.setState({ ...purgedState });
		handleReset();
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
							<Select {...input} {...inputProps} value={this.state[input.name]} onChange={this.onChange} />
						</FormGroup>
					);
				default:
					return (
						<FormGroup key={`form-input-${input.name}`}>
							<Label>{input.label}</Label>
							<Input {...input} {...inputProps} value={this.state[input.name]} onChange={this.onChange} />
						</FormGroup>
					);
			}
		});
	};
	render() {
		const { buttonText, buttonProps, formProps, hasReset, handleReset } = this.props;
		let resetBtn;
		if (hasReset) {
			resetBtn = (
				<Button {...buttonProps} onClick={() => this.onReset(handleReset)} outline>
					Reset
				</Button>
			);
		}
		return (
			<FormContainer onSubmit={this.onSubmit} {...formProps}>
				{this.renderInputs()}
				<ButtonContainer>
					<Button {...buttonProps} my={2}>
						{buttonText}
					</Button>
					{resetBtn}
				</ButtonContainer>
			</FormContainer>
		);
	}
}
export default Form;
