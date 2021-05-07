import React from 'react'
import { Button, Input, Gap } from '../../components'
import './edit-data.scss'

const EditData = () => {
    return (
        <div>
            <p>Add / Edit Data</p>
            <Input label="Tanggal" />
            <Input label="No Pasien"/>
            <Input label="Usia"/>
            <Input label="Status" />
            
           <div className='pagination'>
				<Button title='Save' />
				<Gap width={20} />
				<Button title='Cancel' />
			</div>
        </div>
    )
}

export default EditData
