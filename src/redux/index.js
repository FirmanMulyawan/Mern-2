import { combineReducers } from 'redux'

// import * as authReducer from './authReducer/reducers'
// import * as authActions from './authReducer/actions'

import * as dataReducer from './dataReducer/reducers'
import * as dataActions from './dataReducer/actions'

const appReducer = combineReducers(
  Object.assign(
    {},
    dataReducer,
    // authReducer,
  ),
)

export const reducer = (state, action) => {
  return appReducer(state, action)
}

export const actionCreators = Object.assign(
  {},
  dataActions,
//   authActions,
)
