import React from "react";
import PropTypes from "prop-types";

function GuessedWords(props) {
  let content;
  if (props.guessedWords.length === 0) {
    content = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  } else {
    const guessedWordRows = props.guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    content = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="table-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="guessed-words-component">{content}</div>;
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
