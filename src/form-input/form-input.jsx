import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../styles/form-components.css';

class FormInput extends Component {
	constructor() {
		super();
		this.onChange = this.onChange.bind(this);
	}
	onChange(e) {
		this.props.onChange(e);
	}
	// checkRule(value, rule) {
	// 	let validEmail = new RegExp(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
	// 		onlyNumeric = new RegExp(/^[0-9]*$/),
	// 		onlyAlpha = new RegExp(/^[A-z ]+$/),
	// 		onlyZip = new RegExp(/^\d{5}(?:[-\s]\d{4})?$/),
	// 		onlyPhone = new RegExp(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/);
	// 	switch (rule) {
	// 		case 'EMAIL':
	// 			return validEmail.test(value);
	// 		case 'ONLY_NUMERIC':
	// 			return onlyNumeric.test(value);
	// 		case 'PHONE_NUMBER':
	// 			return onlyPhone.test(value);
	// 		case 'ZIP':
	// 			return onlyZip.test(value);
	// 		case 'ONLY_ALPHA':
	// 			return onlyAlpha.test(value);
	// 		case 'PASSWORD':
	// 			return !!value;
	// 		case 'MINIMUM':
	// 			if (this.props.minLength)
	// 				return value.length >= this.props.minLength;
	// 			else
	// 				return value.length >= 3;
	// 		default:
	// 			return undefined;
	// 	}
	// }
	getErrorMessage(type) {
		switch (type) {
			case 'email':
				return 'Please enter a valid email.';
			case 'password':
				return 'Please enter a password.';
			case 'text':
				return 'Please fill in field.';
			case 'number':
				return 'Please enter a valid email.';
			case 'date':
				return 'Please enter a valid date.';
			default:
				return 'Invalid input.';
		}
	}
	render() {
		return (
			<div className={`form-group ${css.formGroup}`}>
				<label htmlFor={this.props.name}>{this.props.required ? '*' : ''}{this.props.label}</label>
				<input
					required={this.props.required}
					value={this.props.value}
					placeholder={this.props.placeholder}
					className={`form-control ${this.props.isUppercase ? css.caps : ''}`}// ${css.input} ${css[this.props.inputClassName] || ''}
					type={this.props.type}
					id={this.props.name}
					name={this.props.name}
					onChange={this.onChange}
					autoComplete="off"
					disabled={this.props.disabled}
				/>
				<div className='invalid-feedback'>{this.getErrorMessage(this.props.type)}</div>
				<small className='form-text text-muted'>{this.props.helpText}</small>
			</div>
		);
	}
}
FormInput.propTypes = {
	value: PropTypes.string,
	required: PropTypes.string,
	label: PropTypes.string,
	helpText: PropTypes.string,
	min: PropTypes.number,
	max: PropTypes.number,
	placeholder: PropTypes.string,
	inputClassName: PropTypes.string,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	isUppercase: PropTypes.bool,
	minLength: PropTypes.number,
	onTouch: PropTypes.func,
	onChange: PropTypes.func.isRequired,
	onValidate: PropTypes.func,
	disabled: PropTypes.bool,
	rules: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string
	])
};
export default FormInput;