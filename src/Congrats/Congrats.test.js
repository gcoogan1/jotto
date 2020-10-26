import React from "react";
import { shallow } from "enzyme";

import Congrats from "./Congrats";
import { findByTestAttr, checkProps } from "../../Test/testUtils";



const defaultProps = { success: false }

const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setUpProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const congratsComponent = findByTestAttr(wrapper, "congrats-component");
  expect(congratsComponent.length).toBe(1);
});

test("renders no text when `sucsess` prop is false", () => {
  const wrapper = setup({ success: false });
  const congratsComponent = findByTestAttr(wrapper, "congrats-component");
  expect(congratsComponent.text()).toBe("");
});

test("renders congrats message when `success` prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message"); 
  expect(message.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
