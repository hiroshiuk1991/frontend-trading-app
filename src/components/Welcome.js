import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export default function Welcome () {
  const history = useHistory()

function landingPage() {
  history.push('/LandingPage')
}


  return (
    <div className='backgroundpicture'> 
    <div className='welcome'>
      <h1>Welome to STOX </h1>
      <h2>
        The E-Learning Website, dedicated to teach the basics of the Financial
        Markets.
      </h2>
      <p>Throughout this website, you will be able to take our lessons, each focusing on a different aspect, and once you feel ready, you can take the tests to check how much you've learnt! </p>
      <p> Most importantly, have fun! </p> 

      <Button
        variant='contained'
        color='primary'
        onClick={() => landingPage()}
      >
        Lets Login
      </Button>
    </div>
    </div>



  )
}
