import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import Checkbox from '@material-ui/core/Checkbox'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import InfoEight from './InfoEight'
import InfoNine from './InfoNine'

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
        <h3 className='paragraph'>Why do people buy and sell currency?</h3>
        <p className='paragraph'>
          As you can see in the image above, many people need to buy and sell
          currency. Lets look through and find out why. Firstly companies, many
          companies for instance work internationally, and as such need an
          ability to access salaries or buy stock in a foriegn currenct. Lets
          use a construction company for instance, said company has to buy new
          equipment from Germany, and the cost of the equipment will equal to
          100,000 Euro's.
        </p>
        <p className='paragraph'>
          {' '}
          The difficulty comes in as the FX markets are 24 hours live, as oppose
          to the FTSE100 which has a start and end time when trading. This means
          the prices of currency fluxuates, what the cost of 1 GBP relative to 1
          Euro may be better on monday than it is on tuesday. Therefore our mock
          construction company will need to use foreign exchange brokers to get
          the best price they can.
        </p>
        <h3 className='stoxmarkettitle'> How do brokers know the price? </h3>
        <p className='paragraph'>
          {' '}
          Another brilliant question, brokers work with 'analysts' that forecast
          the FX markets to find the optimum price. For instance, an analyst
          will look at the news and business news in particular and make
          predicitions. We can use our example of the Corona Virus as an
          example, with Apple's stock price falling, it means the price of the
          US dollar will decline, due to the domino-affect.
        </p>
        <InfoNine />
        <h3 className='stoxmarkettitle'> How are FX priced </h3>
        <p className='paragraph'>
          {' '}
          This is a bit complicated so I'll give you the short answer at this
          stage. There is a 'bid' price and an 'Ask' Price, the first refers to
          the price the currency is willing to bought at, while the latter
          refers to the oprice the seller is willing to sell at. These, like
          other markets are dictated by outside factors.
        </p>
        <div id='zoom3'>
          <Zoom>
            <img
              src='https://cdn.corporatefinanceinstitute.com/assets/bid-and-ask2.png'
              alt='forex profit market'
              width='500'
              className='fxmarkets'
            />
          </Zoom>
        </div>
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
