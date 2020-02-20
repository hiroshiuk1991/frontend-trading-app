import React from 'react'
import './App.css'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Route, Switch, withRouter } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Landingpage from './components/Landingpage'
import API from './API'
import Markets from './components/Markets'
import Lessons from './components/Lessons'
import InvestorsPage from './components/InvestorsPage'
import NavBar from './components/NavBar'

class App extends React.Component {
  state = {
    name: null,
    investorId: null
    // stocks: []
  }

  login = data => {
    this.setState({
      name: data.investor_name,
      investorId: data.investor_id
    })
    localStorage.token = data.token
  }

  signOut = () => {
    this.setState({ name: null })
    localStorage.removeItem('token')
  }

  componentDidMount () {
    if (this.props.name === null) {
      this.props.history.push('/')
    } else if (localStorage.token) {
      API.validate()
        .then(data => {
          if (data.error) throw Error(data.error)
          this.login(data)
          // debugger
          this.props.history.push('/InvestorsPage')
        })
        .catch(error => alert(error))
    }
  }

  render () {
    // debugger
    return (
      <>
        <NavBar name={this.state.name} signOut={this.signOut} />
        <h1 className='title'>Stox</h1>
        <div>
          <Switch>
            <Route
              exact
              path='/'
              component={props => <Landingpage {...props} login={this.login} />}
            />
            <Route
              exact
              path='/InvestorsPage'
              component={props => <InvestorsPage {...props} />}
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
          </Switch>
        </div>
      </>
    )
  }
}

export default withRouter(App)
