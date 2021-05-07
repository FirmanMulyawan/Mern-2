import React from 'react'
import { PieChart, LineChart } from '../../components/molecules'
import './dashboard.scss'
const Dashboard = () => {
    return (
        <div className="wrapper-data">
            <p className="title">COVID -19</p>
            <LineChart />
            <div className="wrapper-pieChart">
                <PieChart labels={ ['<17','17-40', '>40' ]}/>
                <PieChart labels={ ['sembuh', 'dirawat', 'mninggl']}/>
            </div>
        </div>
    )
}

export default Dashboard
