import React from 'react'
import { PieChart, LineChart } from '../../components/molecules'
import './dashboard.scss'
const Dashboard = () => {
    return (
        <div className="wrapper-data">
            <p className="title">Content Create Blog Page</p>
            <LineChart />
            <div className="wrapper-pieChart">
            <PieChart />
            <PieChart />
            </div>
        </div>
    )
}

export default Dashboard
