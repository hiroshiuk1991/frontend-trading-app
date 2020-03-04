import React from 'react'
import SkyLight from 'react-skylight'
import { Button } from '@material-ui/core'

class InfoFour extends React.Component {
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
            Wall or Wallop?
          </Button>
        </section>
        <SkyLight
          dialogStyles={myBlueBox}
          hideOnOverlayClicked
          ref={ref => (this.customDialog = ref)}
          title='The Wall or Wallop?'
          className='fontBox'
        >
          The Wall or Wallop, is the concept of one of two ways a Bull Market
          can come to an end. The Wall is when the market climbs the 'Wall of
          Worry' until there is no worry, and the second is when the market is
          walloped by something that was never never spoken about before, i.e.
          the mortgage crisis.
        </SkyLight>
      </div>
    )
  }
}

InfoFour.displayName = 'InfoFour'

export default InfoFour
