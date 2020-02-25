import React from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'

import API from '../API'

class UpdateProfile extends React.Component {
    state = {
        newName: '',
        newPassword: ''
    }

    handleUpdateAccount = () => {
        API.updateAccount(this.state.newName, this.state.newPassword)
            .then(data => {
                if (data.error) throw Error(data.error)
                this.props.login(data)

                this.props.history.push('/Investorpage')
            })
            .catch(error => alert(error))
    }

    handleProfile = event =>
        this.setState({ [event.target.name]: event.target.value })

    render() {
        const { newName, newPassword } = this.state
        const { handleUpdateAccount, handleProfile } = this
        return (
            <div className='newUser'>
                <TextField
                    label='name'
                    value={newName}
                    onChange={handleProfile}
                    margin='normal'
                    name='newName'
                />
                <br />
                <TextField
                    label='Password'
                    value={newPassword}
                    onChange={handleProfile}
                    margin='normal'
                    name='newPassword'
                    type='password'
                />
                <br />
                <Button
                    className='btn'
                    onClick={handleUpdateAccount}
                    variant='contained'
                    color='primary'
                >
                    Update
        </Button>
            </div>
        )
    }
}

export default UpdateProfile

