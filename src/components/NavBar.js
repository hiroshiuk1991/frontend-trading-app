import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core'


const NavBar = ({ name, signOut }) => {
    return (
        <div>
            
            <div className='navdiv'>
                <NavLink to='/' exact className="link">Homepage</NavLink>
                <NavLink to='/Lessons' exact className="link">Lessons</NavLink>
                <NavLink to='/Markets' exact className="link">Markets</NavLink>
                <h3 className='welcome'> {name ? `Welcome Back ${name}`
                    : 'Welcome to Stox'} </h3>
                {name && (
                    <Button onClick={signOut} variant='contained' color='primary'>
                        SIGN OUT
                </Button>
                )}
                </div>

        </div>


    )
}

export default NavBar;