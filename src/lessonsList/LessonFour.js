import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import Checkbox from '@material-ui/core/Checkbox'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import InfoEight from './InfoEight'

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
          id='backbutton'
          onClick={() => Goback()}
          variant='contained'
          color='primary'
        >
          Back
        </Button>
        <h1 className='stoxmarkettitle'>What are the Forex Markets</h1>
        <h4 className='paragraph'>
          As with Stocks/shares/securities, the world of currencies/foreign
          exchange has its own market, and that is called the Forex market.
          There are a number of elements that differentiate this market from
          other markets. Lets take a look at the amount being traded in our
          image below.
        </h4>
        <InfoEight />
        <div id='zoom'>
        <Zoom>
          <img
            src='https://11erca3erzzoyuknk3hsluzh-wpengine.netdna-ssl.com/wp-content/uploads/2015/03/currr.jpg'
            alt='forex profit market'
            width='500'
            className='fxmarkets'
          />
          <img
            src='https://xtb.scdn5.secure.raxcdn.com/tal/0073/12/a5a6a4b499e15976b99931772aa123c1d2b2f0e5.png'
            alt='forex profit market'
            width='500'
            className='fxmarkets'
          />
        </Zoom>
        </div>
        <p className='paragraph'>
          As you can see so much more money is in circulation with the FX
          markets. The reason there is so much money is due to the amount of
          people that have a need for foreign currency. 
        </p>
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
