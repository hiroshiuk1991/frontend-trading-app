import React from 'react'
import { Line } from 'react-chartjs-2'
import { Button } from '@material-ui/core'

class secondMarket extends React.Component {
  state = {
    chartsData: {
      labels: [
        '1995',
        '1996',
        '1997',
        '1998',
        '1999',
        '2000',
        '2001',
        '2002',
        '2003',
        '2004',
        '2005'
      ],
      datasets: [
        {
          label: 'FTSE100',
          data: [
            999,
            1100,
            1190,
            1400,
            2500,
            3300,
            1100,
            900,
            1300,
            1600,
            1666
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
                text: 'The FTSE 100',
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
          <h1 className='scoreresults'>The 2000's Dot Com bubble</h1>
          <h2 className='stoxmarkettitle'>
            At the turn of the century the financial crash known as the Dot Com
            Bubble occured...So what exactly happened?
          </h2>
          <p className='stoxmarkettitle'>
            You may have noticed a pattern, market fluxuations are determined by
            investors and the public. During the end of the 1990's and the start
            of 2000's, birthed the start of the internet, and internet based
            companies. The speculation in companies and their potential was
            hyper inflated, it caused a mass investment in companies, thus over
            inflating the companies true value.
          </p>
          <h3 className='stoxmarkettitle'>Can this happen again?</h3>
          <p className='stoxmarkettitle'>
            This is a very topical question, in the late 2010's and the 2020's,
            there has been many commentators that believe we are reaching a
            bubble 2.0. With companies like Facebook and Twitter, many investors
            have seen how their money can quickly increase by investing in these
            tech giants. As such, new investors are using good-faith in those
            companies to justify heavily investing in new tech start up
            companies.
          </p>
        
        </div>
      </div>
    )
  }
}

export default secondMarket
