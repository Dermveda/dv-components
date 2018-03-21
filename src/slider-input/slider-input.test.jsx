import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SliderInput from './slider-input.jsx';

const question = {
	_id: 'abc123',
	name: 'test q',
	type: 'test',
	isCorrect: true,
	chosenAnswer: {
		_id: 'abc234',
		name: 'test a',
		isChosen: true,
		isCorrect: false
	},
	answers: [
		{
			_id: 'abc234',
			name: 'test a',
			isChosen: true,
			isCorrect: false
		},
		{
			_id: 'abc235',
			name: 'test a',
			isChosen: true,
			isCorrect: false
		},
		{
			_id: 'abc236',
			name: 'test a',
			isChosen: true,
			isCorrect: false
		},
		{
			_id: 'abc237',
			name: 'test a',
			isChosen: true,
			isCorrect: false
		},
		{
			_id: 'abc238',
			name: 'test a',
			isChosen: true,
			isCorrect: false
		}
	]
};

describe('<SliderInput/>', () => {
	it('Will render', () => {
		const el = renderer.create(<SliderInput question={question} />);
		expect(el).toMatchSnapshot();
	});
	it('Will have question', () => {
		const el = shallow(<SliderInput question={question} />);
		expect(el).toMatchSnapshot();
	});
});
