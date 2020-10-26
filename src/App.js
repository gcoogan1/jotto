import React, { Component } from 'react';
import "./App.css";
import GuessedWords from './GuessedWords/GuessedWords';
import Congrats from './Congrats/Congrats';

export default class App extends Component {
  render() {
    return (
      <div className="container">
      <h1>Jotto App</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          {guessedWord: "train", letterMatchCount: 3}
        ]} />
      </div>
    )
  }
}

