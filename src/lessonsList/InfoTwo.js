import React from 'react'
import SkyLight from 'react-skylight'
import { Button } from '@material-ui/core'

class InfoTwo extends React.Component {
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
          <h1>
            Who gives the stock their price? & What affects these markets?
          </h1>
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
          title='Who gives the stock their price? & What affects these markets?'
          className='fontBox'
        >
          ANSWER: In an indirect way, they provide their own price, as each
          stock is a slice of the pie. What I mean by that is if you times all
          the stock of Google by the price of them, you will end up with the
          total net worth of Google as a company.
          <img
            src='https://www.the-sun.com/wp-content/uploads/sites/6/2020/02/AF-GRAPHIC-APPLE-SHARES-V2.jpg'
            alt='coronavirus and apple'
            className='applestock'
          />
          The affects of the Corona Virus have cost people ther lives, and also
          their livelihoods, as production has fallen, and even in areas where
          it hasnt, the supply-chain links have been thoroughly disturbed. Now
          this isnt to say that all hope is lost for Apple, it jsut means for
          now, your stock cost less, and in lesson two, we'll talk about buying
          and selling stocks.
        </SkyLight>
      </div>
    )
  }
}

InfoTwo.displayName = 'InfoTwo'

export default InfoTwo
