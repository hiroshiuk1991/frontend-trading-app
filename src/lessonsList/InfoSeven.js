import React from 'react'
import SkyLight from 'react-skylight'
import { Button } from '@material-ui/core'

class InfoSeven extends React.Component {
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
            New Deal?
          </Button>
        </section>
        <SkyLight
          dialogStyles={myBlueBox}
          hideOnOverlayClicked
          ref={ref => (this.customDialog = ref)}
          title='What is the Dow Jones?'
          className='fontBox'
        >
          The New Deal was started by Franklin D. Roosevelt (FDR). He started to
          create reform in the banking system, creating the Federal Deposit
          Insurance Corporation (FDCI), that mandated to regiulate the stock
          market and prevent financial abuse. Furthermore the new deal created
          millions of jobs, pumping life into the economy.
        </SkyLight>
      </div>
    )
  }
}

InfoSeven.displayName = 'InfoSeven'

export default InfoSeven
