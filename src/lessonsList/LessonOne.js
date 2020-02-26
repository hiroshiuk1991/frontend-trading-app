import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import Checkbox from '@material-ui/core/Checkbox'

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
          {' '}
          Back{' '}
        </Button>
      </div>
      <div>
        <h1>What is the Stock Market?</h1>
        <h4>
          To make sense of the stock market, lets take a look at the perspective
          of the companies that put themselves on the stock market (or 'float'
          on the market).
        </h4>
        <p>
          Lets say you start a company, a really fun and exciting business that
          you're passionate about selling a new type of smart phone or selling
          banan, (in all honesty it doesnt matter). Now, lets fast foward 5, 10,
          15 years in the future and your company wants grow further and make
          new products, well then you have two options:
          <br />
          <br />
          <ul>
            <li> 1. Take a loan from a big bank.</li>
            <li>
              {' '}
              2. Generate the income by selling small parts of their company to
              investors.
            </li>
          </ul>
          <br />
          <p>
            As you probably guessed, the second option is what brings us to the
            Stock Market. There are a huge number of stock markets, London has
            the London Stock exchange (LSE), the USA's main market is the New
            York Stock Exchange, most developed countries will have their
            equivalent. However, as there are thousands of companies that
            'float' on the market, there are parameters to categories said
            companies. Throughout this learning platform we'll look at the
            FTSE100, which stands for the Financial Times Stock Exchange 100
            (often referred to as 'footsie'), it lists the top 100 companies
            based on highest market price.
          </p>
        </p>
        <h2>Who gives the stock their price?</h2>
        <p>
          In an indirect way, they provide their own price, as each stock is a
          slice of the pie. What I mean by that is if you times all the stock of
          Google by the price of them, you will end up with the total net worth
          of Google as a company.
        </p>
        <h2>What affects these markets?</h2>
        <p>
          Anything, everything! That's not a joke, the markets are dictated by
          any movement. Lets keep looking at Apple as an example, Apple is a
          valued trillion dollar company, the first to do so, and one of the
          ways they have been to do so is through cheap labour costs outsourced
          through China. China is the worlds largest manufacturing company, that
          gives business high quality and quickly assembeled products with a low
          cost. However, this financial model is essentially 'putting all your
          eggs in one basket', what I mean by that is if for whatever reason
          China has to stop or slow down production, that can seriously affect
          your stock value, and in turn your investors confidence in your
          organisation. Take a look at the graphic below.
        </p>
        <img
          className='applestock'
          src='https://www.the-sun.com/wp-content/uploads/sites/6/2020/02/AF-GRAPHIC-APPLE-SHARES-V2.jpg'
          alt='coronavirus and apple'
        />
        <p>
          The affects of the Corona Virus have cost people ther lives, and also
          their livelihoods, as production has fallen, and even in areas where
          it hasnt, the supply-chain links have been thoroughly disturbed. Now
          this isnt to say that all hope is lost for Apple, it jsut means for
          now, your stock cost less, and in lesson two, we'll talk about buying
          and selling stocks.
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

