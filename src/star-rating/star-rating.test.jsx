import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import StarRating from './star-rating.jsx';
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
describe('<StarRating/>', () => {
	it('Will render', () => {
		const el = renderer.create(<StarRating question={question} />);
		expect(el).toMatchSnapshot();
	});
	it('Will have question', () => {
		const el = shallow(<StarRating question={question} />);
		expect(el).toMatchSnapshot();
	});
	it('Will select answer', () => {
		const func = jest.fn();
		const el = mount(<StarRating question={question} onSelectAnswer={func} />);
		el
			.find('i.material-icons')
			.first()
			.simulate('click');
		expect(func).toHaveBeenCalledTimes(1);
	});
});
