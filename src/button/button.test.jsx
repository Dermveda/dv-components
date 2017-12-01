import React from 'react';
import { shallow } from 'enzyme';
import Button from './button.jsx';
import { Link } from 'react-router-dom';
import sinon from 'sinon';
const props = {
	type: 'primary',
};
//see API DOCS here: http://airbnb.io/enzyme/docs/api/shallow.html
describe('<Button />', () => {
	it('Will render', () => {
		const wrapper = shallow(<Button {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Will be secondary button', () => {
		const localProps = { ...props, type: 'secondary' }
		const wrapper = shallow(<Button {...localProps} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Will be loading', () => {
		const localProps = { ...props, isLoading: true }
		const wrapper = shallow(<Button {...localProps} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Will show text', () => {
		const localProps = { ...props, text: 'Hey there!' }
		const wrapper = shallow(<Button {...localProps} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Will be link', () => {
		const localProps = { ...props, to: '/home', isLink: true }
		const wrapper = shallow(<Button {...localProps} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Will have new target', () => {
		const localProps = { ...props, target: '__blank' }
		const wrapper = shallow(<Button {...localProps} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Will be submit button', () => {
		const localProps = { ...props, isSubmit: true }
		const wrapper = shallow(<Button {...localProps} />);
		expect(wrapper.find('button').prop('type')).toEqual('submit');
	});
	it('Simulates click', () => {
		const onButtonClick = sinon.spy();
		const wrapper = shallow(<Button onClick={onButtonClick} />);
		wrapper.find('button').simulate('click');
		expect(onButtonClick.calledOnce).toEqual(true);
	});
});