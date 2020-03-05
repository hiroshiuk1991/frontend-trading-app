import React from 'react'
import SkyLight from 'react-skylight'
import { Button } from '@material-ui/core'

class InfoNine extends React.Component {
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
            Domino-Affect?
          </Button>
        </section>
        <SkyLight
          dialogStyles={myBlueBox}
          hideOnOverlayClicked
          ref={ref => (this.customDialog = ref)}
          title='The Wall or Wallop?'
          className='fontBox'
        >
          This is a concept used not only in finance, but it is very apt for the
          financial markets. The affect refers to the markets having a knock on
          affect, symbolising the stacking of dominos side by side, if one
          falls, it knocks the other and so on and so forth.
        </SkyLight>
      </div>
    )
  }
}

InfoNine.displayName = 'InfoNine'

export default InfoNine
