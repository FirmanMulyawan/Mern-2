import React from 'react'
import './dropdown.scss'

const DropDown = ({label}) => {
    return (
        <div className='input-wrapper'>
			<p className='label'>{label}</p>
			<select name="dropdown" id="dropdown" className="input">
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
            </select>
		</div>
    )
}

export default DropDown
