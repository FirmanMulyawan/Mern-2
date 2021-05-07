import React from 'react'
import { Button, Input, Gap, Dropdown } from '../../components'
import './edit-data.scss'
import {useHistory } from 'react-router-dom'

const EditData = () => {
    const history = useHistory()
    return (
        <div className="wrapper-data">
            <p className='title'>Add / Edit Data</p>
            <Input label="Tanggal" type="date" className="date-edit" name="date-edit"/>
            <Gap height={18}/>
            <Input label="No Pasien" />
            <Gap height={18}/>
            <Input label="Usia" type="number" min="0"/>
            <Gap height={18}/>
            <Dropdown label="Status" />
            <Gap height={50} />
           <div className='pagination'>
				<Button title='Save' />
				<Gap width={500} />
                <Button title='Cancel' onClick={ ()=> history.push('/input-data')}/>
            </div>
            <Gap height={20} />
        </div>
    )
}

export default EditData
