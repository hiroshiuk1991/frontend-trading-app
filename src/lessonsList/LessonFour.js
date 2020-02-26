import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import Checkbox from '@material-ui/core/Checkbox'

export default function LessonFour () {
  const history = useHistory()
  const [checked, setChecked] = React.useState(false)

  function Goback () {
    history.push('./lessons')
  }

  const handleChange = event => {
    setChecked(event.target.checked)
  }

  return (
    <div>
      <div>
        <Button onClick={() => Goback()} variant='contained' color='primary'>
          Back
        </Button>
        <h1>How to become a successful trader?</h1>
        <h4>
          There are many factors that will impact how well you will perform as a
          programmer, for instance, your own knowledge of a specific company. 
        </h4>
        <h3>Bull Market</h3>
        <p>
          A 'Bull Market' is the average investor's dream. What this means is
          that the market is favourable, if an investor has money floating on
          the market in companies, typical that stock will be appreciating in
          value.
        </p>
      </div>
      <CardActions>
        Lesson Completed?
            <Checkbox
          checked={checked}
          onClick={handleChange}
          value='primary'
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </CardActions>
    </div>
  )
}
