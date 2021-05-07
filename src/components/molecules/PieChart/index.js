import React from 'react'
import  {Pie, Chart} from 'react-chartjs-2'

Chart.defaults.plugins.legend.position = 'right'

const PieChart = ({labels=[]}) => {
    return (
        <div>
            <Pie
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: '# Covid',
                            data: [12, 19, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }}
                height={400}
                width={400}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                    y: {
                            beginAtZero: true,
                        }
                    }
                }} />
        </div>
    )
}

export default PieChart
