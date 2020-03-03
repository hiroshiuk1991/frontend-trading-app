import React from 'react'
import SkyLight from 'react-skylight'
import { Button } from '@material-ui/core'

class InfoOne extends React.Component {
  render () {
    var myBlueBox = {
      backgroundColor: '#87CEFA',
      color: '#ffffff',
      width: '70%',
      height: '50px',
      marginTop: '-250px',
      marginLeft: '-35%'
    }

    return (
      <div>
        <section>
          <Button
            onClick={() => this.customDialog.show()}
            className='materialBtn'
            id='infoBtn'
            variant='contained'
            color='primary'
          >
            Click For Answer
          </Button>
        </section>
        <SkyLight
          dialogStyles={myBlueBox}
          hideOnOverlayClicked
          ref={ref => (this.customDialog = ref)}
          title='Apple`s Stock Market Plummet'
          className='fontBox'
        >
          <p>
            The reason the Corona Virus outbreak caused such a decline in Apple
            Stocks, is the same reason Apple was able to make huge profits.
          </p>
          <p>
            Apple maintained huge profit margins by putsourcing production of
            their producs soely to China. As the virus started in China, and
            caused production to slow down, and transport of said products in
            and out of China to slow down, the knock on effect has resulted in
            confidence in Stock prices to fall.
          </p>
        </SkyLight>
      </div>
    )
  }
}

InfoOne.displayName = 'InfoOne'

export default InfoOne
