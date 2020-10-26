import React from "react";

function Congrats(props) {
  if (props.success) {
    return <div data-test="congrats-component">
        <span data-test="congrats-message">
            Congrats! You guessed the word!!
        </span>
    </div>;
  } else {
    return <div data-test="congrats-component"></div>;
  }
}

export default Congrats;
