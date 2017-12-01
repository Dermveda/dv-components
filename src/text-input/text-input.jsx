import React from 'react';
import PropTypes from 'prop-types';
//import FormInput from '../../form-input/form-input.jsx';
import FormInput from '../form-input/form-input.jsx';

const TextInput = ({ question, onSelectAnswer }) => {
	// TODO: Input box needs to be multi line?
	let placeholder = 'Enter response here.';
	if (question.chosenAnswer && question.chosenAnswer.name)
		placeholder = question.chosenAnswer.name;
	return (
		<li key={'txt_input_' + question._id}>
			{question.name ? question.name : null}

			<FormInput
				type="text"
				isRequired
				name={'TextInput'}
				placeholder={placeholder}
				onTouch={() => {
				}}
				onChange={(e) => onSelectAnswer(question, { name: e.target.value })}
				onValidate={() => {
				}}
				rules={'MINIMUM'}
			/>
		</li>
	);
};
TextInput.propTypes = {
	question: PropTypes.object,
	onSelectAnswer: PropTypes.func,
};
export default TextInput;