import React, { Component } from 'react'
import { connect } from 'react-redux'

import { guessWord } from '../store/actions/index';

export class Input extends Component {
    render() {
        const content = this.props.success
        ? null
        : (
            <form className="form-inline">
                <input data-test="input-box" className="mb-2 mx-sm-3" type="text" placeholder="Enter Guess" />
                <button data-test="submit-button" type="submit" className="btn btn-primary m-2">Submit</button>
            </form>
        )
        return (
            <div data-test="input-component">
                {content}
            </div>
        )
    }
}

const mapStateToProps = ({success}) => {
    return { success }
}



export default connect(mapStateToProps, {guessWord} )(Input)
