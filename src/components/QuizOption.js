import React from 'react'

class QuizOption extends React.Component {
  render () {
    return (
      <p
        className={`ui floating message options
         ${this.props.myAnswer === this.props.option ? 'selected' : null}
         `}
        onClick={() => this.props.checkAnswer(this.props.option)}
      >
        {this.props.option}
      </p>
    )
  }
}
export default QuizOption
