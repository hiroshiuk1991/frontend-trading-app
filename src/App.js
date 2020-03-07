import React from 'react'
import './App.css'
import { Route, Switch, withRouter } from 'react-router-dom'

import Landingpage from './components/Landingpage'
import API from './API'
import Markets from './components/Markets'
import Lessons from './components/Lessons'
import InvestorsPage from './components/InvestorsPage'
import NavBar from './components/NavBar'
import Loginpage from './components/Loginpage'
import LessonOne from './lessonsList/LessonOne'
import LessonTwo from './lessonsList/LessonTwo'
import LessonThree from './lessonsList/LessonThree'
import LessonFour from './lessonsList/LessonFour'
import MainQuiz from './components/MainQuiz'
import UpdateProfile from './components/UpdateProfile'
import Welcome from './components/Welcome'
import QuizList from './components/QuizList'
import MarketList from './components/MarketsList'
import SecondQuiz from './quiz/SecondQuiz'
import EditInvestor from './components/EditInvestor'
import SecondMarket from './components/SecondMarket'
import ThirdMarket from './components/ThirdMarket'

class App extends React.Component {
  state = {
    name: null,
    investorId: null,

    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false,
    loggedIn: false,

    investorScore: []
  }

  removeInvestorScore = targetInvestorScoreId => {
    const investorScore = this.state.investorScore.filter(
      investorScore => targetInvestorScoreId !== investorScore.id
    )
    this.setState({ investorScore })
  }

  addInvestorScore = newScore => {
    this.setState({
      investorScore: [...this.state.investorScore, newScore]
    })
  }

  login = data => {
    this.setState({
      name: data.name,
      investorId: data.investorId
    })
    localStorage.token = data.token
    this.setState({ loggedIn: true })
  }

  signOut = () => {
    this.setState({ name: null })
    localStorage.removeItem('token')
    this.props.history.push('/')
    this.setState({ loggedIn: false })
  }

  investorStateReset = () => {
    this.setState({ investorId: null, name: null })
  }

  validateInvestor = () => {
    if (localStorage.token) {
      API.validate()
        .then(data => {
          if (data.error) throw Error(data.error)
          this.login(data)
        })
        .catch(error => alert(error))
    } else this.props.history.push('/')
  }

  componentDidMount () {
    this.validateInvestor()
    this.investorStats()
  }

  investorStats = () => {
    fetch('http://localhost:3000/quiz_scores')
      .then(resp => resp.json())
      .then(score => this.setState({ investorScore: score }))
  }

  render () {
    return (
      <>
        <NavBar name={this.state.name} signOut={this.signOut} />
        <div>
          <Switch>
            {/* {this.state.investorId ? ( */}
            <Route
              exact
              path='/'
              component={props => (
                <Welcome {...props} loggedIn={this.state.loggedIn} />
              )}
            />
            {/* ) : (  */}
            <Route
              exact
              path='/LandingPage'
              component={props => (
                <Landingpage
                  {...props}
                  login={this.login}
                  investor={this.state.investorId}
                />
              )}
            />
            {/* )} */}
            <Route
              exact
              path='/InvestorsPage'
              component={props => (
                <InvestorsPage
                  {...props}
                  name={this.state.name}
                  investorId={this.state.investorId}
                  investorStateReset={this.investorStateReset}
                  scoreObj={this.state.investorScore.find(
                    score => score.investor_id === this.state.investorId
                  )}
                  removeInvestorScore={this.removeInvestorScore}
                />
              )}
            />
            <Route
              exact
              path='/Markets'
              component={props => <Markets {...props} />}
            />
            <Route
              exact
              path='/lessons'
              component={props => <Lessons {...props} />}
            />
            <Route
              exact
              path='/LoginPage'
              component={props => (
                <Loginpage
                  {...props}
                  login={this.login}
                  investorId={this.state.investorId}
                />
              )}
            />
            <Route
              exact
              path='/lessonone'
              component={props => <LessonOne {...props} />}
            />
            <Route
              exact
              path='/lessontwo'
              component={props => <LessonTwo {...props} />}
            />
            <Route
              exact
              path='/lessonthree'
              component={props => <LessonThree {...props} />}
            />
            <Route
              exact
              path='/lessonfour'
              component={props => <LessonFour {...props} />}
            />
            <Route
              exact
              path='/MainQuiz'
              component={props => (
                <MainQuiz
                  {...props}
                  investorId={this.state.investorId}
                  addInvestorScore={this.addInvestorScore}
                />
              )}
            />
            <Route
              exact
              path='/UpdateProfile'
              component={props => (
                <UpdateProfile {...props} investorId={this.state.investorId} />
              )}
            />
            <Route
              exact
              path='/QuizList'
              component={props => <QuizList {...props} />}
            />
            <Route
              exact
              path='/MarketList'
              component={props => <MarketList {...props} />}
            />
            <Route
              exact
              path='/SecondQuiz'
              component={props => <SecondQuiz {...props} />}
            />
            <Route
              exact
              path='/EditInvestor'
              component={props => <EditInvestor {...props} investorId={this.state.investorId} login={this.login} />}
            />
            <Route
              exact
              path='/SecondMarket'
              component={props => <SecondMarket {...props} />}
            />
          <Route
            exact
            path='/ThirdMarket'
            component={props => <ThirdMarket {...props} />}
          />
          </Switch>
        </div>
      </>
    )
  }
}

export default withRouter(App)
