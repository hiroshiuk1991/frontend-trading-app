import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import Checkbox from '@material-ui/core/Checkbox'
import Zoom from "react-medium-image-zoom";
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
    <div className='stxbtn'>
        <Button className='stxbtn' onClick={() => Goback()} variant='contained' color='primary'>
          Back
        </Button>
      <div>
        <h1 className='stoxmarkettitle'>What is the Stock Market?</h1>
        <h3> ANSWER: </h3>
        <p>
          To make sense of the stock market, lets take a look at the perspective
          of the companies that put themselves on the stock market (or 'float'
          on the market). Lets say you start a company, a really fun and
          exciting business that you're passionate about selling a new type of
          smart phone or selling banan, (in all honesty it doesnt matter). Now,
          lets fast foward 5, 10, 15 years in the future and your company wants
          grow further and make new products, well then you have two options:
          <ul>
          1. Take a loan from a big bank. 
          </ul>
          <ul>2. Generate the income by selling small
            parts of their company to investors. 
          </ul>
          <p>As you probably guessed, the
          second option is what brings us to the Stock Market. There are a huge
          number of stock markets, London has the London Stock exchange (LSE),
          the USA's main market is the New York Stock Exchange, most developed
          countries will have their equivalent. However, as there are thousands
          of companies that 'float' on the market, there are parameters to
          categories said companies. Throughout this learning platform we'll
          look at the FTSE100, which stands for the Financial Times Stock
          Exchange 100 (often referred to as 'footsie'), it lists the top 100
          companies based on highest market price.
          </p>
        </p>
      </div>
      {/* <div>
        <InfoOne />
      </div> */}
      <div>
        <h1 className='stoxmarkettitle'>
          Who gives the stock their price? & What affects these markets?
          </h1>
        <h3>ANSWER:</h3>
          <p>   In an indirect way, they provide their own price, as each
          stock is a slice of the pie. What I mean by that is if you times all
          the stock of Google by the price of them, you will end up with the
          total net worth of Google as a company.</p>
        {/* <InfoTwo /> */}
        <Zoom>
        <img
          src='https://www.the-sun.com/wp-content/uploads/sites/6/2020/02/AF-GRAPHIC-APPLE-SHARES-V2.jpg'
          alt='coronavirus and apple'
          width='500'
          // className='applestock'
        />
        </Zoom>
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
