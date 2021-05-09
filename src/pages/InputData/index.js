import React from 'react'
import { Button, Gap, Input, Dropdown, Datatable } from '../../components'
import './input-data.scss'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../redux'

const InputData = (props) => {
	const [state, setstate] = React.useState(1)
	const history = useHistory()

	React.useEffect(() => {
		props.setData(state)
	}, [props.data])

	const handlePrev = () => {
		setstate(state <= 1 ? 1 : state - 1)
	}

	const handleNext = () => {
		setstate(state === props.page.totalPage? props.page.totalPage: state + 1)
	}
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
				data={props?.data?.data}
			/>
			<Gap height={50} />
			<div className='pagination'>
				<Button title='prev' onClick={ handlePrev}/>
				<Gap width={200} />
				<p className="text-page">{props.page.currentPage}/{ props.page.totalPage}</p>
				<Gap width={200} />
				<Button title='next' onClick={ handleNext}/>
			</div>
			<Gap height={50} />
		</div>
	)
}

const mapStateToProps = ({ dataReducer }) => ({
	data: dataReducer.data,
	page: dataReducer.page,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setData: actionCreators.setData,
    },
    dispatch,
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(InputData)