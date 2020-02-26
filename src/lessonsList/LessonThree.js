import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import Checkbox from '@material-ui/core/Checkbox'

export default function LessonThree () {
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
      </div>
      <div>
        <h1>What's a bull/Bear Market?</h1>
        <h4>
          If you you speak to a broker, read financial print or watch videos on
          youtube, you may come across these terms. Each refers to a
          positive/negative pattern in the market.
        </h4>
        <h3>Bull Market</h3>
        <p>
          A 'Bull Market' is the average investor's dream. What this means is
          that the market is favourable, if an investor has money floating on
          the market in companies, typical that stock will be appreciating in
          value.
        </p>
        <h3>Bear Market</h3>
        <p></p>
        <h3>Market Cycles</h3>
        <p></p>
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
