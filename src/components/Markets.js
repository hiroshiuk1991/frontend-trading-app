import React from 'react'
import { Line } from 'react-chartjs-2'

class Markets extends React.Component {
  state = {
    chartData: {
      labels: [
        'Feb-19',
        'Mar-19',
        'Apr-19',
        'May-19',
        'Jun-19',
        'Jul-19',
        'Aug-19',
        'Sep-19',
        'Oct-19',
        'Nov-19',
        'Dec-19',
        'Jan-20',
        'Feb-20'
      ],
      datasets: [
        {
          label: 'FTSE100',
          data: [617594, 181045, 153060, 106519, 105162, 95072],
          backgroundColor: ['rgb(217, 6, 6)']
        }
      ]
    }
  }

  render () {
    return (
      <div className='chart'>
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
    )
  }
}

export default Markets
