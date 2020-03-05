import React from 'react'
import SkyLight from 'react-skylight'
import { Button } from '@material-ui/core'

class InfoEight extends React.Component {
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
            What does 'Forex' Mean?
          </Button>
        </section>
        <SkyLight
          dialogStyles={myBlueBox}
          hideOnOverlayClicked
          ref={ref => (this.customDialog = ref)}
          title='Forex:'
          className='fontBox'
        >
          Forex simply stands for "Foreign Exchange", referring to the different
          types of currency. For instance, in the UK they use pound sterling
          with a ticker of GBP. In the USA they use the dollar which has a
          ticker of USD.
        </SkyLight>
      </div>
    )
  }
}

InfoEight.displayName = 'InfoEight'

export default InfoEight
