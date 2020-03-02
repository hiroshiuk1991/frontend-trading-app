import React from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'

import API from '../API'

class EditInvestor extends React.Component {
    state = {
        nameEdit: '',
        passwordEdit: ''
    }

    // handleCreateAccount = () => {
    //     API.createAccount(this.state.nameEdit, this.state.passwordEdit)
    //         .then(data => {
    //             if (data.error) throw Error(data.error)
    //             this.props.login(data)
    //             this.props.history.push('/InvestorPage')
    //         })
    //         .catch(error => alert(error))

    //     // API.createScore(this.props.investorId)
    // }

    handleChangeAccount = event =>
        this.setState({ [event.target.name]: event.target.value })

    render() {
        const { nameEdit, passwordEdit } = this.state
        const { handleCreateAccount, handleNewAccount } = this
        return (
            <div className='newUser'>
                <TextField
                    label='name'
                    value={nameEdit}
                    onChange={handleNewAccount}
                    margin='normal'
                    name='nameEdit'
                />
                <br />
                <TextField
                    label='Password'
                    value={passwordEdit}
                    onChange={handleNewAccount}
                    margin='normal'
                    name='passwordEdit'
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

export default EditInvestor;
