import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './button.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import sinon from 'sinon';
const props = {
	type: 'primary'
};
//see API DOCS here: http://airbnb.io/enzyme/docs/api/shallow.html
describe('<Button />', () => {
	it('Will render', () => {
		const wrapper = shallow(<Button {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Will be secondary button', () => {
		const localProps = { ...props, type: 'secondary' };
		const wrapper = shallow(<Button {...localProps} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Will be loading', () => {
		const localProps = { ...props, isLoading: true };
		const wrapper = shallow(<Button {...localProps} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Will show text', () => {
		const localProps = { ...props, text: 'Hey there!' };
		const wrapper = shallow(<Button {...localProps} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Will be link', () => {
		const localProps = { ...props, to: '/home', isLink: true };
		const wrapper = shallow(<Button {...localProps} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Will have new target', () => {
		const localProps = { ...props, target: '__blank' };
		const wrapper = shallow(<Button {...localProps} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Will be submit button', () => {
		const localProps = { ...props, isSubmit: true };
		const wrapper = shallow(<Button {...localProps} />);
		expect(wrapper.find('button').prop('type')).toEqual('submit');
	});
	it('Simulates click', () => {
		const onButtonClick = sinon.spy();
		const wrapper = shallow(<Button onClick={onButtonClick} />);
		wrapper.find('button').simulate('click');
		expect(onButtonClick.calledOnce).toEqual(true);
	});

	// using react-test-renderer
	it('Will render deep', () => {
		const tree = renderer.create(<Button {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('Willbe secondary button deep', () => {
		const localProps = { ...props, type: 'secondary' };
		const tree = renderer.create(<Button {...localProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('Will be loading deep', () => {
		const localProps = { ...props, isLoading: true };
		const tree = renderer.create(<Button {...localProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('Will show text deep', () => {
		const localProps = { ...props, text: 'Hey there!' };
		const tree = renderer.create(<Button {...localProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('Will be link deep', () => {
		const localProps = { ...props, to: '/home', isLink: true };
		const tree = renderer
			.create(
				<Router>
					<Button {...localProps} />
				</Router>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('Will have new target deep', () => {
		const localProps = { ...props, target: '__blank' };
		const tree = renderer.create(<Button {...localProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('Will be submit button deep', () => {
		const localProps = { ...props, isSubmit: true };
		const tree = renderer.create(<Button {...localProps} />).toJSON();
		expect(tree.props.type).toEqual('submit');
	});
	it('Simulates click deep', () => {
		const onButtonClick = jest.fn();
		const element = mount(<Button onClick={onButtonClick} />);
		element.find('button').simulate('click');
		expect(onButtonClick).toHaveBeenCalledTimes(1);
	});
});
