import { combineReducers } from 'redux';
import updateReducer from './upload';
import orders from './ordersData';

export default combineReducers({
  data: updateReducer,
  orders: orders,
});