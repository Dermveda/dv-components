import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../styles/form-components.css';

class FormInput extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.onBlur = this.onBlur.bind(this);
	}
	onChange(e) {
		this.props.onChange(e);
		if (this.props.rules) {
			let is_valid = this.validate(e.target.value, this.props.rules);
			this.props.onValidate(this.props.name, is_valid);
		}
	}
	onBlur() {
		this.props.onTouch(this.props.name);
	}
	validate(value, rules) {
		if (Array.isArray(rules)) {
			let result = rules.find((item) => {
				return !this.checkRule(value, item);
			});
			return !result;
		} else
			return this.checkRule(value, rules);

	}
	checkRule(value, rule) {
		let validEmail = new RegExp(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
			onlyNumeric = new RegExp(/^[0-9]*$/),
			onlyAlpha = new RegExp(/^[A-z ]+$/);
		switch (rule) {
			case 'EMAIL':
				return validEmail.test(value);
			case 'ONLY_NUMERIC':
				return onlyNumeric.test(value);
			case 'ONLY_ALPHA':
				return onlyAlpha.test(value);
			case 'PASSWORD':
				return !!value;
			case 'MINIMUM':
				return value.length >= 3;
			default:
				return undefined;
		}
	}
	render() {
		return (
			<div>
				<input
					value={this.props.value}
					placeholder={this.props.placeholder}
					className={`form-control ${css.input} ${this.props.isUppercase ? css.uppercase : null} ${css[this.props.inputClassName] || ''}`}
					type={this.props.type}
					name={this.props.name}
					onChange={this.onChange}
					onBlur={this.onBlur}
					autoComplete="off"
					disabled={this.props.disabled}
				/>
			</div>
		);
	}
}
FormInput.propTypes = {
	value: PropTypes.string,
	placeholder: PropTypes.string,
	inputClassName: PropTypes.string,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	isUppercase: PropTypes.bool,
	onTouch: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onValidate: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	rules: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string
	])
};
export default FormInput;