import React from 'react'
import { Line } from 'react-chartjs-2'
import InfoThree from '../lessonsList/InfoThree'
import InfoFour from '../lessonsList/InfoFour'
import InfoFive from '../lessonsList/InfoFive'
import InfoSeven from '../lessonsList/InfoSeven'
import { Button } from '@material-ui/core'

class ThirdMarket extends React.Component {
  state = {
    chartsData: {
      labels: [
        '1920',
        '1921',
        '1922',
        '1923',
        '1924',
        '1925',
        '1926',
        '1927',
        '1928',
        '1929',
        '1930',
        '1931',
        '1932'
      ],
      datasets: [
        {
          label: 'FTSE100',
          data: [
            71.29,
            81.1,
            98.73,
            95.52,
            120.51,
            156.66,
            157.2,
            202.4,
            300.0,
            248.48,
            164.58,
            77.9,
            59.93
          ],
          backgroundColor: ['#87CEFA']
        }
      ]
    }
  }
  
    goback = () => {
        this.props.history.push('./MarketList')
    }

  render () {
    return (
      <div className='chart'>
            <Button
                id='backBtn'
                onClick={() => this.goback()}
                variant='contained'
                color='primary'
            >
                Back
        </Button>
        <div>
          <h1 className='ftse'> The DOW Jones </h1>

          <Line
            data={this.state.chartsData}
            // width={100}
            height={50}
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'The Dow Jones',
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
        </div>
        <div className='backgroundpicture1'>
          <h1 className='scoreresults'>The Great Depression</h1>
          <h2 className='stoxmarkettitle'>
            If you've studied english literature, you've probably come across
            John Steinbeck's 'Of Mice and Men', or the 'Grapes of Wrath', both
            based on the desolute state American working class was left after
            the financial crash of the 1920/30's. Lets try to understand what
            happened...
          </h2>
          <InfoThree />
          <p className='stoxmarkettitle'>
            There is a key phrase that is used to understand one of the ways
            financial crashes happen, this is called 'The Wall or Wallop'. The
            Wallop happened in the Great Depression. The rapidly expanding
            'roaring-twenties' in the 1920's saw a significant expansion, from
            millionaires to factory workers, everybody was investing their money
            in the markets.
          </p>
          <InfoFour />
          <p className='stoxmarkettitle'>
            {' '}
            However the problem came as unemployment was rising and production
            was slowing down, which in turn was giving the stocks and
            misrepresented value. Stocks were worth far less than what was
            represented in the markets. All this disproportionality in stock
            prices culminated to what was known as 'Black Tuesday' on Oct 29th
            1929.
          </p>
          <InfoFive />
          <h3 className='stoxmarkettitle'>How did the Economy recover?</h3>
          <p className='stoxmarkettitle'>
            There were many moving parts that allowed the economy to recover,
            one of the key components was Franklin D. Roosevelt (FDR). He looked
            to make sigfniciant banking reform in creating the Federal Deposit
            Insurance Corporation(FDIC) and creating the New Deal.
          </p>
          <InfoSeven />
        </div>
      </div>
    )
  }
}

export default ThirdMarket
