import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import Checkbox from '@material-ui/core/Checkbox'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import InfoTwo from './InfoTwo'

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
      </div>
      <div>
        <h1 className='stoxmarkettitle'>What's a Bull/Bear Market?</h1>
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
          Often you will hear stocks, or markets referred to as 'bear' or
          'bearish', and as you probably imaged, a 'Bear Market' is essentially
          the opposite of a bull market. This is when the market price is
          falling, which encourages investors to sell their stock selling.
        </p>
        <p className='paragraph'>
          The 2008/2009 Housing Market crash was a bear market was the most
          recent significant bear market.
        </p>
        <h3 className='stoxmarkettitle'>
          Is a 'Market-Correction' the same as a a 'Bear-Market'?
        </h3>
        <p className='paragraph'>
          This is a key distinction to understand, namely it is important to
          understand when buying/selling stocks whether the market is going
          through a correction or the initial steps of a bear market, where it
          is best to sell. Typically a correction is seen as a healthy action
          the market is taking, as to not overinflate the value of a stock and
          thus cause hyper inflation. Corrections tend to come after a recent
          high of stock prices, and fall no more than 10%, whereas a Bear market
          is a fall of 20% or more and after a stock's peak pricepoint.
        </p>
        <h3 className='stoxmarkettitle'>Market Cycles</h3>
        <p className='paragraph'>
          Market cycles are a very interesting phenomenon, there isnt hard and
          fast rules, more predictable timelines. The image below shows the US
          stock markets timeline since 1926, click to enlarge. As you can see
          there isan average of 9 years life for Bull markets, where Bear
          markets tend to last just over 1 year.
        </p>
        <h3 className='stoxmarkettitle'>
          Why do you think Bull Markets Last longer than Bear Markets?
        </h3>
      </div>
      <InfoTwo />
      <Zoom>
        <img
          src='https://korvingco.files.wordpress.com/2015/11/bull-and-bear-markets.jpg'
          alt='Market Cycles'
          width='500'
          className='applestock'
        />
      </Zoom>
      <h3 className='picture' > Click the picture to learn more! </h3>
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
