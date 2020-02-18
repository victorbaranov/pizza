import { combineReducers } from 'redux';
import updateReducer from './upload';

export default combineReducers({
  data: updateReducer,
});