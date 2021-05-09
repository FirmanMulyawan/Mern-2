import React, {Fragment} from 'react'
import { PieChart, LineChart, Button } from '../../components'
import './dashboard.scss'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../redux'


const Dashboard = (props) => {
    const history = useHistory()

    React.useEffect(() => {
        props.changeName();
    }, [])

    return (
        <Fragment >
        <div className="wrapper-data">
                <p className="title">COVID -19</p>
                {/* <p>{ props.name}</p> */}
            <LineChart />
            <div className="wrapper-pieChart">
                <PieChart labels={ ['<17','17-40', '>40' ]}/>
                <PieChart labels={ ['sembuh', 'dirawat', 'mninggl']}/>
            </div>
            </div>
            <div style={{
                maxWidth: 500, marginBottom: 30}}>
                <Button title='Input Data' onClick={()=> history.push('/input-data') }/>
            </div>
        </Fragment>
    )
}


const mapStateToProps = ({ dataReducer }) => ({
  name: dataReducer.name,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeName: actionCreators.changeName,
    },
    dispatch,
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
