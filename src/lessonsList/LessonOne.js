import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import Checkbox from '@material-ui/core/Checkbox'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import InfoOne from './InfoOne'

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
    <div className='backgroundpictureLSE'>
      <div className='stxbtn'>
        <Button
          id='backBtn'
          className='stxbtn'
          onClick={() => Goback()}
          variant='contained'
          color='primary'
        >
          Back
        </Button>
        <div>
          <h1 className='stoxmarkettitle'>What is the Stock Market?</h1>
          <h3 className='paragraph'> ANSWER: </h3>
          <p className='paragraph'>
            To make sense of the stock market, lets take a look at the
            perspective of the companies that put themselves on the stock market
            (or 'float' on the market). Lets say you start a company, a really
            fun and exciting business that you're passionate about selling a new
            type of smart phone or selling banan, (in all honesty it doesnt
            matter). Now, lets fast foward 5, 10, 15 years in the future and
            your company wants grow further and make new products, well then you
            have two options:
            <ul className='paragraph'>1. Take a loan from a big bank.</ul>
            <ul className='paragraph'>
              2. Generate the income by selling small parts of their company to
              investors.
            </ul>
            <p className='paragraph'>
              As you probably guessed, the second option is what brings us to
              the Stock Market. There are a huge number of stock markets, London
              has the London Stock exchange (LSE), the USA's main market is the
              New York Stock Exchange, most developed countries will have their
              equivalent. However, as there are thousands of companies that
              'float' on the market, there are parameters to categories said
              companies. Throughout this learning platform we'll look at the
              FTSE100, which stands for the Financial Times Stock Exchange 100
              (often referred to as 'footsie'), it lists the top 100 companies
              based on highest market price.
            </p>
          </p>
        </div>
        <div>
          <h1 className='stoxmarkettitle'>
            Who gives the stock their price? & What affects these markets?
          </h1>
          <h3 className='paragraph'>ANSWER:</h3>
          <p className='paragraph'>
            In an indirect way, they provide their own price, as each stock is a
            slice of the pie. If you multiply all the stock of Google by the
            price of them, you will end up with the total net worth of Google as
            a company. It is also directly determined by a simple economic
            prinical of 'Supply and Demand', if more people want to invest in a
            company because they trust or believe in the products/services, then
            the price will follow.
          </p>
          <p className='paragraph'>
            For example, if a companies stock is worth £100 a share, and there
            are 100 shares then £100 x 100 = £10,000
          </p>
          <p className='paragraph'>
            Lets take a look at the picture below, it shows how the early stages
            of corona has affected Apple's stock.
            <h2 className='paragraph'>Can you guess why? </h2>
          </p>
          <InfoOne />
          <br />
          <Zoom>
            <img
              src='https://www.the-sun.com/wp-content/uploads/sites/6/2020/02/AF-GRAPHIC-APPLE-SHARES-V2.jpg'
              alt='coronavirus and apple'
              width='500'
              className='applestock'
            />
          </Zoom>
          <h2 className='picture'>
            Click on the image below for a better look at how much Apple's stock
            has fallen.
          </h2>
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
    </div>
  )
}
