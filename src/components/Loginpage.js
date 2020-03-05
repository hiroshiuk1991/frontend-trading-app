import React from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'

import API from '../API'

class Loginpage extends React.Component {
  state = {
    nameSignup: '',
    passwordSignup: ''
  }

  handleCreateAccount = () => {
    API.createAccount(this.state.nameSignup, this.state.passwordSignup)
      .then(data => {
        if (data.error) throw Error(data.error)
        this.props.login(data)
        this.props.history.push('/InvestorPage')
      })
      .catch(error => alert(error))

    // API.createScore(this.props.investorId)
  }

  handleNewAccount = event =>
    this.setState({ [event.target.name]: event.target.value })

  render () {
    const { nameSignup, passwordSignup } = this.state
    const { handleCreateAccount, handleNewAccount } = this
    return (
      <div className='editUser'>
        <TextField
          label='name'
          value={nameSignup}
          onChange={handleNewAccount}
          margin='normal'
          name='nameSignup'
        />
        <br />
        <TextField
          label='Password'
          value={passwordSignup}
          onChange={handleNewAccount}
          margin='normal'
          name='passwordSignup'
          type='password'
        />
        <br />
        <Button
          className='btn'
          onClick={handleCreateAccount}
          variant='contained'
          color='primary'
        >
          Create
        </Button>
      </div>
    )
  }
}

export default Loginpage
