import React from 'react';
import PropTypes from 'prop-types';
import { greenText } from '../styles/colors.css';
import { pointer } from '../styles/form-components.css';
const NUM_STARS = 5;

const buildAnswerObj = (numStars) => {
	return {
		name: numStars
	};
};
const StarRating = ({ question, onSelectAnswer }) => {
	//build the stars
	let stars = [];
	for (let i = 0; i < NUM_STARS; i++) {
		if (question.chosenAnswer && question.chosenAnswer.name >= i + 1) {
			stars.push(
				<i key={'star_rating_' + i}
					className={`material-icons ${greenText}`}
					style={{ fontSize: '200%' }}
					onClick={() => onSelectAnswer(question, buildAnswerObj(i + 1))}>
					star
				</i>
			);
		} else {
			stars.push(
				<i
					key={'star_rating_' + i}
					className="material-icons"
					style={{ fontSize: '200%' }}
					onClick={() => onSelectAnswer(question, buildAnswerObj(i + 1))}
				>
					star_border
				</i>
			);
		}
	}
	return (
		<li key={'qq_star_' + question._id}>
			{question.name ? question.name : null}
			<div className={pointer}>
				{stars}
			</div>
		</li>
	);
};
StarRating.propTypes = {
	question: PropTypes.object,
	onSelectAnswer: PropTypes.func,
};
export default StarRating;