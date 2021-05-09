import createReducer from '../utils/createReducer'
import * as types from './types'

const dataState = {
    data: [],
    name: 'firman',
    page: {
    currentPage: 1,
    totalPage: 1,
  }
}


export const dataReducer = createReducer(dataState, {
  [types.UPDATE_DATA](state, payload) {
    return {
      ...state,
      data: payload.payload,
    }
    },
    
    [types.CHANGE_NAME](state, payload) {
    return {
      ...state,
      name: "firman mulyawan",
    }
  },
    
  [types.UPDATE_PAGE](state, payload) {
    return {
      ...state,
      page: payload.payload
    }

    }

})
