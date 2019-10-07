import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { reducer } from 'redux-form'

export default combineReducers({
  auth: authReducer,
  form: reducer,
})
