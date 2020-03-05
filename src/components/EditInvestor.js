import React from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'

import API from '../API'

class EditInvestor extends React.Component {
    state = {
        nameEdit: '',
        passwordEdit: ''
    }

    handleEditAccount = () => {
        API.updateAccount(this.state.nameEdit, this.state.passwordEdit)
            .then(data => {
                if (data.error) throw Error(data.error)
                this.props.login(data)
                this.props.history.push('/InvestorPage')
            })
            .catch(error => alert(error))

        // API.createScore(this.props.investorId)
    }

    handleChangeAccount = event =>
        this.setState({ [event.target.name]: event.target.value })

    render() {
        const { nameEdit, passwordEdit } = this.state
        const { handleEditAccount, handleChangeAccount } = this
        return (
            <div className='editUser'>
                <TextField
                    label='Name'
                    value={nameEdit}
                    onChange={handleChangeAccount}
                    margin='normal'
                    name='nameEdit'
                />
                <br />
                <TextField
                    label='Password'
                    value={passwordEdit}
                    onChange={handleChangeAccount}
                    margin='normal'
                    name='passwordEdit'
                    type='password'
                />
                <br />
                <Button
                    className='btn'
                    onClick={handleEditAccount}
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
