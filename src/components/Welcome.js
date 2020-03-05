import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export default function Welcome (props) {
  const history = useHistory()

  function landingPage (props) {
    history.push('/LandingPage')
  }

  return (
    <div className='backgroundpictureLSE'>
      <div className='stoxmarkettitle'>
        <h1 className='stoxmarkettitle'>Welome to STOX </h1>
        <h2 className='stoxmarkettitle'>
          The E-Learning Website, dedicated to teach the basics of the Financial
          Markets.
        </h2>
        <p className='stoxmarkettitle'>
          Throughout this website, you will be able to take our lessons, each
          focusing on a different aspect, and once you feel ready, you can take
          the tests to check how much you've learnt!
        </p>
        <p className='stoxmarkettitle'> First things first, lets create an account and work through the lessons. </p>
        {!props.loggedIn ? (
          <Button
            variant='contained'
            color='primary'
            onClick={() => landingPage()}
          >
            Lets Login
          </Button>
        ) : null}
      </div>
    </div>
  )
}
