import React from 'react'
import { Line } from 'react-chartjs-2'

class secondMarket extends React.Component {
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
            81.10,
            98.73,
            95.52,
            120.51,
            156.66,
            157.20,
            202.40,
            300.00,
            248.48,
            164.58,
            77.90,
            59.93,
            
          ],
          backgroundColor: ['#87CEFA']
        }
      ]
    }
  }

  render () {
    return (
      <div className='chart'>
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
            Now, the 2008 financial crash was complicated and unprecidented,
            only when the smoke cleared months after did we as a species fully
            understand what happened. During the years of 2006-2009 millions
            lost their homes, just as much lost their jobs, companies went under
            and the world economy almost went bankrupt. As I mentioned, there's
            a lot of moving parts, So lets take it step by step.
          </p>
          <h3 className='stoxmarkettitle'>
            Why was it called the 'Housing Market' crash?
          </h3>
          <p className='stoxmarkettitle'>
            The crash was caused by the Housing Market defaulting, what does
            that mean? Well it means that millions of mortgages that big banks
            were giving out couldn't be paid, the homeowners defaulted their
            mortgages. As such, the banks stock prices and money owed turned in
            'bad debt' and meant that said banks were would go bankrupt if they
            did not get government financial aid.
          </p>
          <h3 className='stoxmarkettitle'> So was it the homeowners fault? </h3>
          <p className='stoxmarkettitle'>
            It may be easy think that the mortage owners are at fault, when in
            actuality they are just as much victims as everyone else (bar the
            banks). What the banks did was very clever, but dangerous, to
            understand lets talk about the history of the banks love affair with
            mortgages.
          </p>
          <br />
          <p className='stoxmarkettitle'>
            Banks in the 1970's and 1980's used to make a large amount of money
            off mortgages, namely the interest rate that homebuyers would pay to
            the bank for the money lent. This relationship was working well,
            then in the late 1980's competition to get more and more homebuyers
            to take mortgages caused lower and lower interest rates, as you can
            imagine this left the profit margins in mortgages not worth its
            weight....Enter the 'Sub Prime Mortgages'.
          </p>
          <br />
          <p className='stoxmarkettitle'>
            'Sub-Prime mortgages', much like a lot of terms in the financial
            world, sounds very complicated, however it is just a nice way of
            saying a 'bad'/'risky' mortgage, meaning someone who may be likely
            to default on their mortgage, which also brought about the 'NINJA'
            loans. Bank therefore would offer these mortgages/loans to get the
            contract of those loans in their posession. After these banks would
            have thousands of these mortgages/loans, they would bundle them
            together into a box, and sell that box to investors looking to make
            money from the interest. Often, banks would sell these boxes to
            other banks. You may often hear certain markets referred to as a
            'bubble', the reason is there is a belief that the bubble will
            burst, which will end in a financial crash.
          </p>
          <h3 className='stoxmarkettitle'>
            If it was a Housing Market Crash, why did the world economy nearly
            go bankrupt?
          </h3>
          <p className='stoxmarkettitle'>
            The one key lesson that is important to learn in this e-learning
            app, is that the financial markets are essentially a stack of
            dominoes stood up right next to each other, one action can have a
            reaction to another. This all culminated as you can see in the
            chart, in the end of 2008.
          </p>
        </div>
      </div>
    )
  }
}

export default secondMarket
