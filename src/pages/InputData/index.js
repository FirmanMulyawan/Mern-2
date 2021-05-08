import React from 'react'
import { Button, Gap, Input, Dropdown, Datatable } from '../../components'
import './input-data.scss'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

const InputData = () => {
	const [data, setData] = React.useState([]);
	const history = useHistory()

	React.useEffect(() => {
		Axios.get('http://localhost:4000/v1/data/datas?page=1&perPage=10')
			.then(result => {
				setData(result.data)
			})
			.catch(err => {
			console.log('error', err)
		})
	}, [data])

	return (
		<div className='home-page-wrapper wrapper-data'>
				<p className='title'>Input Data</p>
				<Dropdown label="Status" />
				<Gap height={18} />
				<Input label="Usia" type="number" min="0"/>
				<Gap height={18} />
				<Input label="Tanggal" type="date" id="date-input" name="date-input" data-date-format="YYYY-MM-DD"/>
				<Gap height={50} />
				<div className='pagination-input'>
				<Button title='Tambah Data' onClick={ ()=> history.push('/edit-data')}/>
				<Gap width={500} />
				<Button title='Download Data' />
            	</div>
			<Gap height={50} />
			<Datatable
				data={data}
			/>
			<Gap height={50} />
		</div>
	)
}

export default InputData