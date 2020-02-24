import React from 'react'
import { Line } from 'react-chartjs-2'

class Markets extends React.Component {
  state = {
    chartData: {
      labels: [
        'Feb-19',
        'Mar-19',
        'Springfield',
        'Lowell',
        'Cambridge',
        'New Bedford'
      ],
      datasets: [
        {
          label: 'Population',
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
