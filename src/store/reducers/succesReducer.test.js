import { actionTypes } from '../actions/index';
import successReducer  from './successReducer';

test('returns default state of `false` when no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false)
});


test('returns state of `true` after recieving an action of type `COORECT_GUESS`', () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true) 
})