import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Message from './message.jsx';
const props = {
	message: 'Test message'
};
describe('<Message/>', () => {
	it('Will render', () => {
		const el = renderer.create(<Message {...props} />);
		expect(el).toMatchSnapshot();
	});
	it('Will not have message', () => {
		const el = shallow(<Message message="" />);
		expect(el).toMatchSnapshot();
	});
	it('Will be success', () => {
		const el = shallow(<Message {...props} isSuccess={true} />);
		expect(el).toMatchSnapshot();
	});
	it('Will be info', () => {
		const el = shallow(<Message {...props} isInfo={true} />);
		expect(el).toMatchSnapshot();
	});
});
