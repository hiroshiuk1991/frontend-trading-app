// import React from 'react'
// import { secondQuizData } from './quiz/SecondQuizData'
// import { Button } from '@material-ui/core'
// import API from '../API'

// class SecondQuiz extends React.Component {
//     state = {
//         currentQuestion: 0,
//         myAnswer: null,
//         options: [],
//         score: 0,
//         disabled: true,
//         isEnd: false,

//         finalScore: 0
//     }

//     loadQuizData = () => {
//         this.setState(() => {
//             return {
//             questions: secondQuizData[this.state.currentQuestion].question,
//                 answer: secondQuizData[this.state.currentQuestion].answer,
//                 options: secondQuizData[this.state.currentQuestion].options
//             }
//         })
//     }

//     componentDidMount() {
//         this.loadQuizData()
//     }

//     nextQuestionHandler = () => {
//         const { myAnswer, answer, score } = this.state

//         if (myAnswer === answer) {
//             this.setState({
//                 score: score + 1
//             })
//         }
//         this.setState({
//             currentQuestion: this.state.currentQuestion + 1
//         })
//     }

//     postResults = event => {
//         event.preventDefault()
//         API.quizScore(this.state.score, this.props.investorId).then(score => {
//             this.props.addInvestorScore(score)
//             alert('Score Saved!')
//             this.props.history.push('/InvestorsPage')
//         })
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (this.state.currentQuestion !== prevState.currentQuestion) {
//             this.setState(() => {
//                 return {
//                     disabled: true,
//                     questions: secondQuizData[this.state.currentQuestion].question,
//                     options: secondQuizData[this.state.currentQuestion].options,
//                     answer: secondQuizData[this.state.currentQuestion].answer
//                 }
//             })
//         }
//     }
//     //check answer
//     checkAnswer = answer => {
//         this.setState({ myAnswer: answer, disabled: false })
//     }
//     finishHandler = () => {
//         if (this.state.currentQuestion === secondQuizData.length - 1) {
//             this.setState({
//                 isEnd: true
//             })
//         }
//     }
//     render() {
//         const { options, currentQuestion, isEnd } = this.state

//         if (isEnd) {
//             return (
//                 <div className='result'>
//                     <h3>Game Over: Your Final score is {this.state.score} points </h3>
//                     <p>
//                         The correct answer's for the questions are:
//             <ul>
//                             {secondQuizData.map((item, index) => (
//                                 <li className='ui floating message options' key={index}>
//                                     {item.answer}
//                                 </li>
//                             ))}
//                         </ul>
//                     </p>
//                     <Button
//                         variant='contained'
//                         color='primary'
//                         onClick={event => this.postResults(event)}
//                     >
//                         Submit Score
//           </Button>
//                 </div>
//             )
//         } else {
//             return (
//                 <div className='quiz'>
//                     <h1>{this.state.questions} </h1>
//                     <span>{`Questions ${currentQuestion}  out of ${secondQuizData.length} remaining `}</span>
//                     {options.map(option => (
//                         <p
//                             className={`ui floating message options
//          ${this.state.myAnswer === option ? 'selected' : null}
//          `}
//                             onClick={() => this.checkAnswer(option)}
//                         >
//                             {option}
//                         </p>
//                         // <QuizOption
//                         //   option={option}
//                         //   key={option}
//                         //   checkAnswer={this.checkAnswer}
//                         //   myAnswer={this.myAnswer}
//                         // />
//                     ))}
//                     {currentQuestion < secondQuizData.length - 1 && (
//                         <Button
//                             className='ui inverted button'
//                             variant='contained'
//                             color='primary'
//                             disabled={this.state.disabled}
//                             onClick={this.nextQuestionHandler}
//                         >
//                             Next
//             </Button>
//                     )}
//                     {currentQuestion === secondQuizData.length - 1 && (
//                         <Button
//                             className='ui inverted button'
//                             variant='contained'
//                             color='primary'
//                             onClick={this.finishHandler}
//                         >
//                             Finish
//             </Button>
//                     )}
//                 </div>
//             )
//         }
//     }
// }

// export default SecondQuiz;
