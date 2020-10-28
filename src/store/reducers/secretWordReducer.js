import { actionTypes } from "../actions/index";

//returning state so that if state is already set then the state will not be overrided to null and the reducer will just return the state as is
export default (state=null, action) => {
    switch (action.type) {
      case actionTypes.SET_SECRET_WORD:
        return action.payload;
      default:
        return state;
    }
  }
