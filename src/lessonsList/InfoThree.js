import React from 'react'
import SkyLight from 'react-skylight'
import { Button } from '@material-ui/core'

class InfoThree extends React.Component {
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
            Dow Jones?
          </Button>
        </section>
        <SkyLight
          dialogStyles={myBlueBox}
          hideOnOverlayClicked
          ref={ref => (this.customDialog = ref)}
          title='What is the Dow Jones?'
          className='fontBox'
        >
          The Dow Jones is the US's highest rating markets ranking the top 30
          companies by price. Watching Bloomberg news or other financial news
          shows often quote the Dow Jones to indicate where the market is.
          However critics often note the disproportionality as they only cover
          30 companies, and thus it doesnt represent companies in the smaller
          markets.
        </SkyLight>
      </div>
    )
  }
}

InfoThree.displayName = 'InfoThree'

export default InfoThree
