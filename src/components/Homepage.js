// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import API from '../API'
// import NavBar from './NavBar'
// import Loginpage from './Loginpage'
// import Markets from './Markets';
// import Lessons from './Lessons'

// class Homepage extends React.Component {

//     state = {
//         name: null,
//         investorId: null,
//         stocks: []
//     }

//     login = data => {
//         this.setState({
//             name: data.investor_name,
//             investorId: data.investor_id
//         })
//         localStorage.token = data.token
//     }

//     signOut = () => {
//         this.setState({ name: null })
//         localStorage.removeItem('token')
//     }

//     componentDidMount() {
//         if (this.props.name === null) {
//             this.props.history.push('/')
//         } else if (localStorage.token) {
//             API.validate()
//                 .then(data => {
//                     if (data.error) throw Error(data.error)
//                     this.login(data)
//                     this.props.history.push('/')
//                 })
//                 .catch(error => alert(error))
//         }

//         // Add fetch and setState of Stocks Array.

//     }

//     render() {
//         const { name } = this.state
//         const { signOut, login } = this
//         return(
//        <div>
//     <BrowserRouter>
//         <NavBar name={name} signOut={signOut} />
//         <h1 className='title'>Stox</h1>
//         <div>
//             <Switch>
//                 {/* <Route
//                     exact
//                     path='/login'
//                     render={props => <Loginpage {...props} login={login} />}
//                 /> */}
//                 <Route
//                     exact
//                     path='/Markets'
//                     component={props => <Markets {...props} />}
//                 />
//                 <Route
//                     exact
//                     path='/lessons'
//                     component={props => <Lessons {...props} />}
//                             />

//             </Switch>
//         </div>
//     </BrowserRouter>
//     </div>
//         )
//     }

// }

// export default Homepage;
