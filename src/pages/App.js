import React, { Fragment } from 'react'
import { Routes } from '../config'
import './App.css'
import { Provider } from 'react-redux'
import store from '../redux/store'

function App() {

	return (
		<Fragment>
			<Provider store={store}>
				< Routes />
			</Provider>
		</Fragment>

	)
}

export default App
