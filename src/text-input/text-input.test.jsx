import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import TextInput from './text-input.jsx';
const question = {
	_id: 'abc123',
	name: 'test q',
	type: 'test',
	isCorrect: true,
	answers: [
		{
			_id: 'abc234',
			name: 'test a',
			isChosen: true,
			isCorrect: false
		},
		{
			_id: 'abc234',
			name: 'test a',
			isChosen: true,
			isCorrect: false
		},
		{
			_id: 'abc234',
			name: 'test a',
			isChosen: true,
			isCorrect: false
		},
		{
			_id: 'abc234',
			name: 'test a',
			isChosen: true,
			isCorrect: false
		},
		{
			_id: 'abc234',
			name: 'test a',
			isChosen: true,
			isCorrect: false
		}
	]
};

describe('<TextInput/>', () => {
	it('Will render', () => {
		const el = renderer.create(<TextInput question={question} />);
		expect(el).toMatchSnapshot();
	});
	it('Will select answer', () => {
		const onChangeFunc = jest.fn();
		const el = mount(<TextInput question={question} onSelectAnswer={onChangeFunc} />);
		el.find('input').simulate('change');
		expect(onChangeFunc).toHaveBeenCalledTimes(1);
	});
});
