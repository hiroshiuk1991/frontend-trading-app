import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import CardActions from '@material-ui/core/CardActions'
import Checkbox from '@material-ui/core/Checkbox'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function LessonTwo () {
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
      <Button
        id='backbutton'
        onClick={() => Goback()}
        variant='contained'
        color='primary'
      >
        Back
      </Button>
      <div>
        <h1 className='stoxmarkettitle'>Why do people buy/sell Stock?</h1>
        <p className='paragraph'>
          So we have covered why companies would float on the stock exchange,
          but that is only half of the story. What about the investors?, who are
          they?, and why do they want to even buy stocks? Well its quite simple,
          its anyone and everyone, anyone is able to buy stocks and shares,
          there are some small requirements, i.e. passport etc, but on the whole
          anybody can. As mentioned before, they do this through 'brokers', the
          middle-men of the stock markets that make trades on your behalf.
        </p>
        <p className='paragraph'> A broker's </p>
        <p className='paragraph'>
          The first reason should come as no surprise....money.
          <br />
          <br />
          <p className='paragraph'>
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
          <h3 className='paragraph'>What is a Porfolio?</h3>
          <p className='paragraph'>
            A portfolio is a container of an investors personal investments.
            This can be in specific stocks (AKA 'equity'), securities or
            currency. The value of a portfolio is based on the value of the
            investments inside. A key term to understand is to 'diversify your
            portfolio', this means to investment in multplie markets to make
            your investments less vulnerable. i.e. investing in the UK markets,
            US markets, currency, bonds, gold, housing market, etc.
          </p>
          <ul>
            <h3 className='paragraph'>Beating the Market?</h3>
            <p className='paragraph'>
              How do you beat the market? This is no simple answer, I think its
              important to note what beating the market means. In short, it
              means gaining a return of investment (ROI) larger than the current
              markets index price. (Indexes are a hypothetical portfolios in a
              market, i.e. FTSE or Dow Jones, and said stocks mimic the results
              of stocks, giving an overall ROI result. )
            </p>
            <h3>
              Here are a few Brokerage firms that can get you started, click on
              them
            </h3>
            <li>
              <a href='https://www.hl.co.uk/' target='_blank'>
                Hargreaves Lansdown
              </a>
            </li>
            <br/>
            <li>
              <a href='https://robinhood.com/gb/en/' target='_blank'>
                RobinHood
              </a>
            </li>
            <br />
            <li>
              <a href='https://www.fidelity.co.uk/' target='_blank'>
                Fidelity
              </a>
            </li>
          </ul>
        </p>
        <h2> </h2>
        <Zoom>
          <img
            src='https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/02/How-To-Buy-Stocks-1440x570.jpg'
            alt='buy and sell'
            width='500'
            className='howto'
          />
        </Zoom>
        <h2 className='picture'>
          Click the picture to see how you can get started buying stocks
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
  )
}
