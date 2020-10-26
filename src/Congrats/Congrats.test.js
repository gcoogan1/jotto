import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { findByTestAttr } from '../../Test/testUtils';



Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
}

test('renders without error', () => {
    const wrapper = setup()
    const congratsComponent = findByTestAttr(wrapper, "congrats-component")
    expect(congratsComponent.length).toBe(1) 
});

test('renders no text when `sucsess` prop is false', () => {
    const wrapper = setup({ success: false })
    const congratsComponent = findByTestAttr(wrapper, "congrats-component")
    expect(congratsComponent.text()).toBe('')
})

test('renders congrats message when `success` prop is true', () => {
    const wrapper = setup({ success: true })
    const message = findByTestAttr(wrapper, "congrats-message")
    expect(message.text().length).not.toBe(0)
})