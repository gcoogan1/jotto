import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";
import { findByTestAttr, storeFactory } from "../../Test/testUtils";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();  //.dive goes in deeper to see the children of the component
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    test("renders component without error", () => {});

    test("renders input", () => {});

    test("renders submit button", () => {});
  });

  describe("word has been guessed", () => {
    test("renders component without error", () => {});

    test("does not render input", () => {});

    test("does not render submit button", () => {});
  });
});

describe("update state", () => {});
