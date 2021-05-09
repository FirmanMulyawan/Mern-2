import * as types from './types'
import Axios from 'axios'

export const changeName = () => (dispatch) => {
      dispatch({
        type: types.CHANGE_NAME,
      })
}

export const setData = (page) => (dispatch) => {
Axios.get(`http://localhost:4000/v1/data/datas?page=${page}&perPage=10`)
			.then(result => {
				dispatch({
          type: types.UPDATE_DATA,
          payload: result
      })
			})
			.catch(err => {
			console.log('error', err)
		})
  
}