import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer, Header } from '../../components'
import InputData from '../InputData'
import EditData from '../EditData'
import Dashboard from '../Dashboard'
import './mainApp.scss'

const MainApp = () => {
	return (
		<div className='main-app-wrapper'>
			<Header />
			<div className='content-wrapper'>
				<Router>
					<Switch>
						<Route path='/input-data'>
							<InputData />
						</Route>
						<Route path='/edit-data'>
							<EditData />
						</Route>
						<Route path='/'>
							<Dashboard />
						</Route>
					</Switch>
				</Router>
			</div>
			<Footer />
		</div>
	)
}

export default MainApp
