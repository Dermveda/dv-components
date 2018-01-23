import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import MultipleChoice from './multiple-choice.jsx';
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

describe('<MultipleChoice/>', () => {
	it('Will render', () => {
		const el = renderer.create(<MultipleChoice question={question} />);
		expect(el).toMatchSnapshot();
	});
	it('Will have question', () => {
		const el = shallow(<MultipleChoice question={question} />);
		expect(el).toMatchSnapshot();
	});
	it('Will select answer', () => {
		const func = jest.fn();
		const el = mount(<MultipleChoice question={question} onSelectAnswer={func} />);
		el
			.find('div.dvc-card')
			.first()
			.simulate('click');
		expect(func).toHaveBeenCalledTimes(1);
	});
});
