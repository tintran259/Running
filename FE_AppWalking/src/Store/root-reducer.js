import { combineReducers } from 'redux'
import UserReducer from './User/reducer'
import AppReducer from './App/reducer'

const MyReducer = combineReducers({
   User: UserReducer,
   App: AppReducer
})

export default MyReducer;