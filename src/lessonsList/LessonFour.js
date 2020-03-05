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
    <div className='backgroundpictureLSE'>
      <div>
        <Button
          id='backBtn'
          onClick={() => Goback()}
          variant='contained'
          color='primary'
        >
          Back
        </Button>
        <h1 className='stoxmarkettitle'>Currency Markets?</h1>
        <h4 className='paragraph'>
          There are many factors that will impact how well you will perform on
          the stock market.
        </h4>
        <h3 className='paragraph'>Beating the Market?</h3>
        <p className='paragraph'>
          How do you beat the market? This is no simple answer, I think its
          important to note what beating the market means. In short, it means
          gaining a return of investment (ROI) larger than the current markets
          index price. (Indexes are a hypothetical portfolios )
        </p>
        <h3 className='stoxmarkettitle'> </h3>
        <p className='paragraph'>X</p>
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
