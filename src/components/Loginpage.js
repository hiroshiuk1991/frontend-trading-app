// import React from 'react'
// import { TextField } from '@material-ui/core'
// import { Button } from '@material-ui/core'

// import API from '../API'

// class Loginpage extends React.Component {
//     // state = {
//     //     nameLogin: '',
//     //     passwordLogin: '',
//     //     newUser: false,
//     //     nameSignup: '',
//     //     passwordSignup: ''
//     // }

//     // handleSubmit = () => {
//     //     API.login(this.state.nameLogin, this.state.passwordLogin)
//     //         .then(data => {

//     //             if (data.error) throw Error(data.error)
//     //             this.props.login(data)
//     //             this.props.history.push('/')
//     //         })
//     //         .catch(error => alert(error))
//     // }


//     handleCreateAccount = () => {
//         API.createAccount(this.state.nameSignup, this.state.passwordSignup)
//             .then(data => {

//                 if (data.error) throw Error(data.error)
//                 this.props.login(data)

//                 this.props.history.push('/')
//             })
//             .catch(error => alert(error))
//     }

//     // handleChange = event =>
//     //     this.setState({ [event.target.name]: event.target.value })

//     // newCustomer = () =>
//     //     this.setState({ newUser: !this.state.newUser })

//     // handleNewAccount = event =>
//     //     this.setState({ [event.target.name]: event.target.value })

// render () {
//     const { name, password, newUser } = this.state
//     const { handleChange, handleSubmit, newCustomer, handleCreateAccount, handleNewAccount } = this

//     return (
//         <div className='loginContainer'>
//             <div className='logindiv'>
//                 <div className='wrapper'>
//                     <TextField
//                         label='name'
//                         value={name}
//                         onChange={handleChange}
//                         margin='normal'
//                         name='nameLogin'
//                     />
//                     <br />
//                     <TextField
//                         label='Password'
//                         value={password}
//                         onChange={handleChange}
//                         margin='normal'
//                         name='passwordLogin'
//                         type='password'
//                     />

//                     <br />
//                     <Button onChange={handleSubmit} variant='contained' color='primary'>
//                         SUBMIT
//                     </Button>
//                     <br />
//                     <br />

//                     <Button onClick={() => newCustomer()} variant='contained' color='primary'>
//                         Create Account
//                     </Button>
//                     <br />
//                     <br />

//                     {newUser ?
//                         <div>
//                             <TextField
//                                 label='name'
//                                 value={name}
//                                 onChange={handleNewAccount}
//                                 margin='normal'
//                                 name='nameSignup'
//                             />
//                             <br />
//                             <TextField
//                                 label='Password'
//                                 value={password}
//                                 onChange={handleNewAccount}
//                                 margin='normal'
//                                 name='passwordSignup'
//                                 type='password'
//                             />
//                             <br />
//                             <Button onClick={handleCreateAccount} variant='contained' color='primary'>
//                                 Create
//                             </Button>
//                         </div>
//                     : null}
//                 </div>
//             </div>
//         </div>
//     )
// }

// }

// export default Loginpage;