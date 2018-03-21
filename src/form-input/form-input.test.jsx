import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import FormInput from './form-input.jsx';
const props = {
	name: 'test',
	type: 'email',
	onChange: jest.fn()
};

describe('<FormInput/>', () => {
	it('Will render', () => {
		const el = renderer.create(<FormInput {...props} />);
		expect(el).toMatchSnapshot();
	});
	it('Will be password', () => {
		const el = shallow(<FormInput {...props} type="password" />);
		expect(el).toMatchSnapshot();
	});
	it('Will be text', () => {
		const el = shallow(<FormInput {...props} type="text" />);
		expect(el).toMatchSnapshot();
	});
	it('Will be number', () => {
		const el = shallow(<FormInput {...props} type="number" />);
		expect(el).toMatchSnapshot();
	});
	it('Will be date', () => {
		const el = shallow(<FormInput {...props} type="date" />);
		expect(el).toMatchSnapshot();
	});
	it('Will be invalid type', () => {
		const el = shallow(<FormInput {...props} type="" />);
		expect(el).toMatchSnapshot();
	});
	it('Will be invalid type', () => {
		const el = shallow(<FormInput {...props} type="" />);
		expect(el).toMatchSnapshot();
	});
	it('Will be required', () => {
		const el = shallow(<FormInput {...props} required={true} />);
		expect(el).toMatchSnapshot();
	});
	it('Will have label', () => {
		const el = shallow(<FormInput {...props} label="test label" />);
		expect(el).toMatchSnapshot();
	});
	it('Will have help text', () => {
		const el = shallow(<FormInput {...props} helpText="help me test" />);
		expect(el).toMatchSnapshot();
	});
	it('Will have label', () => {
		const el = shallow(<FormInput {...props} label="test label" />);
		expect(el).toMatchSnapshot();
	});
	it('Will have min number', () => {
		const el = shallow(<FormInput {...props} min={1} type="number" />);
		expect(el).toMatchSnapshot();
	});
	it('Will have max number', () => {
		const el = shallow(<FormInput {...props} max={1} type="number" />);
		expect(el).toMatchSnapshot();
	});
	it('Will have placeholder', () => {
		const el = shallow(<FormInput {...props} placeholder="test ph" />);
		expect(el).toMatchSnapshot();
	});
	it('Will be uppercase', () => {
		const el = shallow(<FormInput {...props} isUppercase={true} />);
		expect(el).toMatchSnapshot();
	});
	it('Will have min length', () => {
		const el = shallow(<FormInput {...props} minLength={5} />);
		expect(el).toMatchSnapshot();
	});
	it('Will run onChange', () => {
		const onChangeFunc = jest.fn();
		const el = mount(<FormInput {...props} onChange={onChangeFunc} />);
		el.find('input').simulate('change', { target: { value: 'some value' } });
		expect(onChangeFunc).toHaveBeenCalledTimes(1);
	});
	it('Will be disabled', () => {
		const el = shallow(<FormInput {...props} disabled={true} />);
		expect(el).toMatchSnapshot();
	});
});
