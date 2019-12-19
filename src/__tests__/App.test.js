import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';
import Converter from '../components/Converter';
import { configure, mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// uses react-test-renderer for snap-shot test
describe('App component', () => {
    it('renders correctly', () => {
        const page = renderer.create(<App />).toJSON();
        expect(page).toMatchSnapshot();
    });
});

// Enzyme full mount test
it('has a Converter', () => {
    let component = mount(<App />);
    expect(component.containsMatchingElement(
        <span> is equal to </span>
    )).toBeTruthy()
});

// uses render function from Enzyme
describe('Converter component', () => {
    it('correctly renders converter', () => {
        let component = render(<Converter />);
        expect(component.find('h4.converter-heading')).toBeDefined();
    });
});





