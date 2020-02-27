import React from 'react'

export default function QuizOption (props) {
// class QuizOption extends React.Component {
//   render () {
    return (
      <p
        className={`ui floating message options
         ${props.myAnswer === props.option ? 'selected' : null}
         `}
        onClick={() => props.checkAnswer(props.option)}
      >
        {props.option}
      </p>
    )
  }
// }
// export default QuizOption
