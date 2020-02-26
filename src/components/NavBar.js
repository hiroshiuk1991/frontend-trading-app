import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import Picture from '../images/stoxLogo.jpg'


const NavBar = ({ name, signOut }) => {
  return (
    <div className='navbar'>
      <div>
        <img className='logo' src={Picture} alt='logo' />
      </div>
      {name ? (
        <div className='navdiv'>
          <NavLink to='/' exact className='link' activeStyle={{
            fontWeight: "bold",
            color: "blue"
          }}>
            Homepage
          </NavLink>
          <NavLink to='/investorspage' exact className='link' activeStyle={{
            fontWeight: "bold",
            color: "blue"
          }}>
            {name}'s page
          </NavLink>
          <NavLink to='/Lessons' exact className='link' activeStyle={{
            fontWeight: "bold",
            color: "blue"
          }}>
            Lessons
          </NavLink>
          <NavLink to='/Markets' exact className='link' activeStyle={{
            fontWeight: "bold",
            color: "blue"
          }}>
            Markets
          </NavLink>
          <NavLink to='/mainquiz' exact className='link' activeStyle={{
            fontWeight: "bold",
            color: "blue"
          }}>
            Quiz
          </NavLink>
          <h3 className='welcome'> {`Welcome Back ${name}`} </h3>
          {/* {name && ( */}
          <Button onClick={signOut} variant='contained' color='primary'>
            SIGN OUT
          </Button>
          {/* )} */}
        </div>
      ) : null}
    </div>
  )
}

export default NavBar
