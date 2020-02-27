import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import Checkbox from '@material-ui/core/Checkbox'
import InfoOne from './InfoOne'
import InfoTwo from './InfoTwo'

export default function LessonOne () {
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
      <div className='position1'>
        <InfoOne />
      </div>
      <div>
        <InfoTwo className='position2' />
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
