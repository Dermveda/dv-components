import React from 'react';
import {shallow} from 'enzyme';
import Slider from './slider.jsx';

const data = [
	{ label: 'Bad', stuff: 'stuff 1' },
	{ label: 'So-so', stuff: 'stuff 2', extra: 'hi' },
	{ label: 'Long-long-long-long-long name', stuff: 'stuff 3' },
	{ label: 'Good', stuff: 'stuff 4', other: '!!!!!' }
];

test('Creates basic range Slider', () => {
	const wrapper = shallow(
		<Slider uniqueId='test' range={6} initial={5}/>
	);
	expect(wrapper).toMatchSnapshot();
});

test('Creates basic data Slider', () => {
	const wrapper = shallow(
		<Slider uniqueId='labels'
			initial={{ label: 'So-so', stuff: 'stuff 2', extra: 'hi' }}
			data={data}
			onLabelChange={() => {}}/>
	);
	expect(wrapper).toMatchSnapshot();
});
