import React from 'react';
import PropTypes from 'prop-types';
import Slider from '../slider/slider.jsx';

const SliderInput = ({ question, onSelectAnswer }) => {
	let initialValue = null;
	let sliderLabels = question.answers.map(answer => {
		let sliderLabel = {
			label: answer.name,
			answer
		};
		if (question.chosenAnswer && answer._id === question.chosenAnswer._id)
			initialValue = Object.assign({}, sliderLabel);

		return sliderLabel;
	});
	// TODO: intial value isnt rendering on first render
	return (
		<li key={'QuizQuestion_' + question._id} className="pb-4">
			{question.name}
			<Slider
				uniqueId={'Slider_' + question._id}
				data={sliderLabels}
				isSideLabel={true}
				isHiddenLabels={true}
				onLabelChange={({ answer }) => onSelectAnswer(question, answer)}
				initial={initialValue}/>
		</li>
	);
};
SliderInput.propTypes = {
	question: PropTypes.object,
	onSelectAnswer: PropTypes.func,
};
export default SliderInput;