import React from 'react'
import { Line } from 'react-chartjs-2';

class Markets extends React.Component {
    state = {
        chartData: {
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            datasets: [
                {
                    label: 'Population',
                    data: [
                        617594,
                        181045,
                        153060,
                        106519,
                        105162,
                        95072
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                    ]
                }
            ]
        }
    }

render () {
    return(
    <div className="chart">
       
        <Line
            data={this.state.chartData}
            // width={100}
            // height={50}
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

export default Markets;