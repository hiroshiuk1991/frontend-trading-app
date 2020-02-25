import React from 'react'
import { Line } from 'react-chartjs-2'

class Markets extends React.Component {
  state = {
    chartData: {
      labels: [
        'Nov-06',
        'Dec-06',
        'Jan-07',
        'Feb-07',
        'Mar-07',
        'Apr-07',
        'May-07',
        'Jun-07',
        'Jul-07',
        'Aug-07',
        'Sep-07',
        'Oct-07',
        'Nov-07',
        'Dec-07',
        'Jan-08',
        'Feb-08',
        'Mar-08',
        'Apr-08',
        'May-08',
        'Jun-08',
        'Jul-08',
        'Aug-08',
        'Sep-08',
        'Oct-08',
        'Nov-08',
        'Dec-08',
        'Jan-09',
        'Feb-09'
      ],
      datasets: [
        {
          label: 'FTSE100',
          data: [6129, 6040, 6220, 6203, 6171, 6308, 6449, 6621, 6607, 6360, 6303, 6466, 6721, 6432, 6456, 5879, 5884, 5702, 6087, 6053, 5411, 5636, 4902, 4500, 4432, 4288, 4434, 4242],
          backgroundColor: ['rgb(217, 6, 6)']
        }
      ]
    }
  }

  render () {
    return (
      <div className='chart'>
        <div>
          <h1> The FTSE100 </h1>

          <Line
            data={this.state.chartData}
            // width={100}
            height={50}
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'Largest Cities In Massachusetts',
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
        </div>
        <div>
          <h1> The 2008/2009 Financial Market Crash</h1>
          <p> </p>
        </div>
        In 2008/2009 we saw one of the worst financial disasters in modern days.
        S
      </div>
    )
  }
}

export default Markets
