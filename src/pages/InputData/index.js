import React from 'react'
import { Button, Gap, Input, Dropdown } from '../../components'
import './input-data.scss'

const InputData = () => {
	return (
		<div className='home-page-wrapper wrapper-data'>
				<div className='create-wrapper'>
					<Button title='create blog' />
				</div>
				<p className='title'>Input Data</p>
				<Dropdown label="Status" />
				<Gap height={18} />
				<Input label="Usia" type="number" min="0"/>
				<Gap height={18} />
				<Input label="Tanggal" type="date" id="date-input" name="date-input"/>
				<Gap height={50} />
				<div className='pagination-input'>
				<Button title='Tambah Data' />
				<Gap width={500} />
				<Button title='Download Data' />
            	</div>
            <Gap height={20} />
		</div>
	)
}

export default InputData