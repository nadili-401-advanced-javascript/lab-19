import React from 'react';
import Converter from '../components/Converter';
import { configure, mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

// Enzyme shell mount test
it('correctly change y input on change x input', () => {
    let component = shallow(<Converter />);
    let inputX = component.find('label.x-label input');
    let inputY = component.find('label.y-label input');
    inputX.simulate('change', {
        target: { value: '1' }
    })
    expect('value' in inputY.props()).toEqual(true)
});