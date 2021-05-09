import createReducer from '../utils/createReducer'
import * as types from './types'

const dataState = {
    data: [],
    name: 'firman',
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

})
