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
      console.log('oiiaaa', result.data.per_page)
				dispatch({
          type: types.UPDATE_DATA,
          payload: result
        })
    dispatch({
          type: types.UPDATE_PAGE,
      payload: {
          currentPage: result.data.current_page,
          totalPage: Math.seil(result.data.total_data / result.data.per_page) 
          }
        })
			})
			.catch(err => {
			console.log('error', err)
		})
  
}