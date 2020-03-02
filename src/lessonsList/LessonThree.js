import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import Checkbox from '@material-ui/core/Checkbox'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

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
    <div className='backgroundpicture'>
      <div>
        <Button onClick={() => Goback()} variant='contained' color='primary'>
          Back
        </Button>
      </div>
      <div>
        <h1 className='stoxmarkettitle'>What's a bull/Bear Market?</h1>
        <h4 className='paragraph'>
          If you you speak to a broker, read financial print or watch videos on
          youtube, you may come across these terms. Each refers to a
          positive/negative pattern in the market.
        </h4>
        <h3 className='stoxmarkettitle'>Bull Market</h3>
        <p className='paragraph'>
          A 'Bull Market' is the average investor's dream. What this means is
          that the market is favourable, if an investor has money floating on
          the market in companies, typical that stock will be appreciating in
          value.
        </p>
        <p className='paragraph'>
          Bull Markets tend to have a longer 'market-cycle'. For example, since
          the 2008/2009 financial crash, the markets globally have been in a
          bull market, making year-on-year growth.
        </p>
        <h3 className='stoxmarkettitle'>Bear Market</h3>
        <p className='paragraph'>
          As you probably imaged, a 'Bear Market' is essentially the opposite of
          a bull market. This is when the market price is falling, which
          encourages selling.
        </p>
        <p className='paragraph'> </p>
        <h3 className='stoxmarkettitle'>Market Cycles</h3>
        <p className='paragraph'></p>
      </div>
      <Zoom>
        <img
          src='https://korvingco.files.wordpress.com/2015/11/bull-and-bear-markets.jpg'
          alt='Market Cycles'
          width='500'
          className='applestock'
        />
      </Zoom>
      <CardActions>Lesson Completed?</CardActions>
      <Checkbox
        checked={checked}
        onClick={handleChange}
        value='primary'
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  )
}
