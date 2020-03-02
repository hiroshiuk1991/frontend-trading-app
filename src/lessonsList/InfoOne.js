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
        <div >
        <section>
          <h1 className='stoxmarkettitle'>Key Words</h1>
          <Button
            onClick={() => this.customDialog.show()}
            className='stoxmarkettitle'
            variant='contained'
            color='primary'
          >
            Stock :
          </Button>
        </section>
        <SkyLight
          dialogStyles={myBlueBox}
          hideOnOverlayClicked
          ref={ref => (this.customDialog = ref)}
          title='What is the Stock Market?'
          className='fontBox'
        >
         <p>weqf</p>
        </SkyLight>
      </div>
    )
  }
}

InfoOne.displayName = 'InfoOne'

export default InfoOne
