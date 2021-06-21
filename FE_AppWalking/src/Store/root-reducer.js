import {combineReducers} from 'redux';
import UserReducer from './User/reducer';
import AppReducer from './App/reducer';
import Authenication from './Auth/reducer';
import EventReducer from './Event/reducer';
import RankReducer from './Rank/reducer';

const MyReducer = combineReducers({
  User: UserReducer,
  App: AppReducer,
  Auth: Authenication,
  Event: EventReducer,
  Rank: RankReducer,
});

export default MyReducer;
