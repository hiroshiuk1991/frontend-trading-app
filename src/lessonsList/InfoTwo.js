import React from 'react'
import SkyLight from 'react-skylight'
import { Button } from '@material-ui/core'

class InfoTwo extends React.Component {
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
            Click for Answer
          </Button>
        </section>
        <SkyLight
          dialogStyles={myBlueBox}
          hideOnOverlayClicked
          ref={ref => (this.customDialog = ref)}
          title='Why do you think Bull Markets Last longer than Bear Markets?'
          className='fontBox'
        >
          Its quite a simple answer, when things go bearish, governments,
          investors, the powers that be attempt to correct the market, for
          example via government bailouts. So, its best to say, there is a
          conscience effort to turn the bear into a bull.
        </SkyLight>
      </div>
    )
  }
}

InfoTwo.displayName = 'InfoTwo'

export default InfoTwo
