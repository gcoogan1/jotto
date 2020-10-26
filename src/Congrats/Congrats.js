import React from "react";
import PropTypes from 'prop-types'

function Congrats(props) {
  if (props.success) {
    return <div data-test="congrats-component" className="alert alert-success">
        <span data-test="congrats-message">
            Congrats! You guessed the word!!
        </span>
    </div>;
  } else {
    return <div data-test="congrats-component"></div>;
  }
}

Congrats.propTypes = {
    success : PropTypes.bool.isRequired
}

export default Congrats;
