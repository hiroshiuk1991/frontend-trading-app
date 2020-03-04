import React from 'react'
import SkyLight from 'react-skylight'
import { Button } from '@material-ui/core'

class InfoFive extends React.Component {
  render () {
    var myBlueBox = {
      backgroundColor: '#87CEFA',
      color: '#ffffff',
      width: '70%',
      height: '450px',
      marginTop: '-300px',
      marginLeft: '-35%'
    }

    return (
      <div>
        <section>
          <Button
            onClick={() => this.customDialog.show()}
            className='stxbtn'
            variant='contained'
            color='primary'
            id='secondInfoBtn'
          >
            Black Tuesday?
          </Button>
        </section>
        <SkyLight
          dialogStyles={myBlueBox}
          hideOnOverlayClicked
          ref={ref => (this.customDialog = ref)}
          title='What was Black Tuesday?'
          className='fontBox'
        >
          Many individuals during the 'roaring-twenties' invested in the
          financial markets. However this was done 'on-margin', meaning
          investing with borrowed money from a bank. This meant once the reality
          caught up to the stock prices, the banks began defaulting the borrowed
          investment money. Thus resulting in most shares becoming worthless.
        </SkyLight>
      </div>
    )
  }
}

InfoFive.displayName = 'InfoFive'

export default InfoFive
