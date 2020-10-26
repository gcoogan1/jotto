import React from "react";
import PropTypes from "prop-types";

function GuessedWords(props) {
    let content;
    if(props.guessedWords.length === 0){
        content = (
            <span data-test="guess-instructions">Try to guess the secret word!</span>
        )
    }
  return(
    <div data-test="guessed-words-component">
        {content}
    </div>
  )
}

//In this case the propType expected is an array of objects
GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
