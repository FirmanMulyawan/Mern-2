import React from 'react'
import { Button, Gap, Input, Dropdown, Datatable } from '../../components'
import './input-data.scss'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

const InputData = () => {
	const [data, setData] = React.useState([]);
	const [q, setQ] = React.useState("")
	const history = useHistory()

	React.useEffect(() => {
		Axios.get('http://localhost:4000/v1/data/datas')
			.then(result => {
				console.log("data api", result.data)
				setData(result.data)
			})
			.catch(err => {
			console.log('error', err)
		})
	}, [])

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
			<Gap height={20} />
			<Datatable
				data={data}
			/>
		</div>
	)
}

export default InputData