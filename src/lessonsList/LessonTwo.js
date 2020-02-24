import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export default function LessonTwo()  {
  const history = useHistory()

  function Goback() {
  history.push('./lessons')
}

    return (
      <div>
      <Button onClick={() => Goback()} variant='contained' color='primary'>
        {' '}
        Back{' '}
      </Button>
      <div>
        <h1>Why do people buy/sell Stock?</h1>
        <h4>
          So we have covered why companies would float on the stock exchange,
          but that is only half of the story. What about the investors, who are
          they, and why do they want to even buy stocks? Well its quite simple,
          its anyone and everyone. As mentioned before, they do this through
          'brokers', the middle-men of the stock markets that make trades on
          your behalf.
        </h4>
        <p>
          The first reason should come as no surprise....money. 
          <br />
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
      </div>
      </div>
    )
  }

