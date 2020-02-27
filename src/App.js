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

    investorScore: []
  }

  removeInvestorScore = targetInvestorScoreId => {
    const investorScore = this.state.investorScore.filter(investorScore =>
      targetInvestorScoreId !== investorScore.id
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
      name: data.investor_name,
      investorId: data.investor_id
    })
    localStorage.token = data.token
    this.props.history.push('/InvestorsPage')
  }

  signOut = () => {
    this.setState({ name: null })
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  investorStateReset = () => {
    this.setState({ investorId: null, name: null})
  }

  validateInvestor = () => {
    if (localStorage.token) {
      API.validate()
        .then(data => {
          if (data.error) throw Error(data.error)
          this.login(data)
          this.props.history.push('/')
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
            {this.state.investorId ? (
              <Route
                exact
                path='/'
                component={props => (
                  <Welcome
                    {...props}
                  />
                )}
              />   
            ) : ( 
           <Route
                exact
                path='/'
                component={props => (
                  <Landingpage
                    {...props}
                    login={this.login}
                    investor={this.state.investorId}
                  />
                )}
              />)}
            <Route
              exact
              path='/InvestorsPage'
              component={props => (
                <InvestorsPage
                  {...props}
                  name={this.state.name}
                  investorId={this.state.investorId}
                  investorStateReset={this.investorStateReset}
                  scoreObj={this.state.investorScore.find(score => score.investor_id === this.state.investorId)}
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
                <MainQuiz {...props} investorId={this.state.investorId} addInvestorScore={this.addInvestorScore}/>
              )}
            />
            <Route
              exact
              path='/UpdateProfile'
              component={props => (
                <UpdateProfile {...props} investorId={this.state.investorId} />
              )}
            />
          </Switch>
        </div>
      </>
    )
  }
}

export default withRouter(App)
