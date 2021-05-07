import React from 'react'
import './input.scss'

const Index = ({label, ...rest}) => {
	return (
		<div className='input-wrapper'>
			<p className='label'>{label}</p>
			<input {...rest} className='input' />
		</div>
	)
}

export default Index
