import React from "react";
import { shallow } from "enzyme";

import GuessedWords from "./GuessedWords";
import { findByTestAttr, checkProps } from "../../Test/testUtils";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 3
    }
  ]
};

const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setUpProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
    //Since the wrapper is the same for both tests in this function 
    //a beforeEach is used to define wrapper so that both tests can access that wrapper
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords : [] });
    })
    //TESTS
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, "guessed-words-component");
        expect(component.length).toBe(1)
    })
    
    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, "guess-instructions");
        expect(instructions.text().length).not.toBe(0);
    })
})

describe('if there are words guessed', () => {
    let wrapper;
    const guessedWords = [
        {guessedWord: "train", letterMatchCount: 3 },
        {guessedWord: "agile", letterMatchCount: 2 },
        {guessedWord: "partly", letterMatchCount: 5},
    ];

    beforeEach(() => {
        wrapper = setup({ guessedWords });
    })

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, "guessed-words-component");
        expect(component.length).toBe(1)
    })

    test('renders "guessed word" section', () => {
        const guessedWordSection = findByTestAttr(wrapper, "guessed-words");
        expect(guessedWordSection.length).toBe(1)
    })

    test('correct number of guessed words', () => {
        const guessedWordDisplay = findByTestAttr(wrapper, "guessed-word");
        expect(guessedWordDisplay.length).toBe(guessedWords.length); //guessedWords is the prop above; expect the amount of words shown to match the amount of words in the prop
    })
})
