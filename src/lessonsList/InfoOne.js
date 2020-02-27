import React from 'react'
import SkyLight from 'react-skylight'
import { Button } from '@material-ui/core'

class InfoOne extends React.Component {
  render () {
    var myBlueBox = {
      backgroundColor: '#87CEFA',
      color: '#ffffff',
      width: '70%',
      height: '600px',
      marginTop: '-300px',
      marginLeft: '-35%'
    }

    return (
        <div className='stxbtn'>
        <section>
          <h1>What is the Stock Market?</h1>
          <Button
            onClick={() => this.customDialog.show()}
            className='stxbtn'
            variant='contained'
            color='primary'
          >
            Click to Learn
          </Button>
        </section>
        <SkyLight
          dialogStyles={myBlueBox}
          hideOnOverlayClicked
          ref={ref => (this.customDialog = ref)}
          title='What is the Stock Market?'
          className='fontBox'
        >
          ANSWER: To make sense of the stock market, lets take a look at the
          perspective of the companies that put themselves on the stock market
          (or 'float' on the market). Lets say you start a company, a really fun
          and exciting business that you're passionate about selling a new type
          of smart phone or selling banan, (in all honesty it doesnt matter).
          Now, lets fast foward 5, 10, 15 years in the future and your company
          wants grow further and make new products, well then you have two
          options: 1.Take a loan from a big bank. 2. Generate the income by
          selling small parts of their company to investors. As you probably
          guessed, the second option is what brings us to the Stock Market.
          There are a huge number of stock markets, London has the London Stock
          exchange (LSE), the USA's main market is the New York Stock Exchange,
          most developed countries will have their equivalent. However, as there
          are thousands of companies that 'float' on the market, there are
          parameters to categories said companies. Throughout this learning
          platform we'll look at the FTSE100, which stands for the Financial
          Times Stock Exchange 100 (often referred to as 'footsie'), it lists
          the top 100 companies based on highest market price.
        </SkyLight>
      </div>
    )
  }
}

InfoOne.displayName = 'InfoOne'

export default InfoOne
