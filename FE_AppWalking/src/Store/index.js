import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import Logger from 'redux-logger'
import MyReducer from './root-reducer'

const Store = createStore(
   MyReducer,
   applyMiddleware(Thunk, Logger)
)

export default Store