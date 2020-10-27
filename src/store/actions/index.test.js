import { correctGuess, actionTypes } from './index';

describe('correctGuess', () =>{
    test('returns an action with type `CORRECT_GUESS`', () => {
        const action = correctGuess();
        expect(action).toEqual({type: actionTypes.CORRECT_GUESS}) //toEqual is used instead of toBe bc action creators are mutable functions(obj or arrays); toBe can only be used on strings numbers etc, things that cannot be mutated
    })
})