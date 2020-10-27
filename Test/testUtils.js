import checkPropTypes from "check-prop-types";
import rootReducer from "../src/store/reducers/index";
import { createStore } from "../../../Library/Caches/typescript/3.3/node_modules/redux";

export const storeFactory = initialState => {
  createStore(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
