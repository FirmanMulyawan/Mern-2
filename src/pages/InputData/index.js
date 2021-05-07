import React from 'react'
import { Button, Gap, Input, Dropdown } from '../../components'
import './input-data.scss'
import { useHistory } from 'react-router-dom'

const InputData = () => {
	const history = useHistory()

	return (
		<div className='home-page-wrapper wrapper-data'>
				<p className='title'>Input Data</p>
				<Dropdown label="Status" />
				<Gap height={18} />
				<Input label="Usia" type="number" min="0"/>
				<Gap height={18} />
				<Input label="Tanggal" type="date" id="date-input" name="date-input"/>
				<Gap height={50} />
				<div className='pagination-input'>
				<Button title='Tambah Data' onClick={ ()=> history.push('/edit-data')}/>
				<Gap width={500} />
				<Button title='Download Data' />
            	</div>
            <Gap height={20} />
		</div>
	)
}

export default InputData