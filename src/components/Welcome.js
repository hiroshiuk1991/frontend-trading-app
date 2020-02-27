import React from 'react'
import { Button } from '@material-ui/core'
// import { useHistory } from 'react-router-dom'
// import LandingPage from './Landingpage'

export default function Welcome () {

  return (
    <div>
      <h1>Welome to STOX </h1>
      <h2>
        The E-Learning Website, dedicated to teach the basics of the Financial
        Markets.
      </h2>

      <Button
        variant='contained'
        color='primary'
        // onClick={event => landingPage(event)}
      >
        Lets Login In
      </Button>
    </div>



  )
}
