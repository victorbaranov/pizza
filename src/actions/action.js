import axios from "axios";

import {
  GET_DATA,
  ADD_ORDER_FAIL,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS
} from "./type";

export function orderRequest() {
  return {
    type: ADD_ORDER_REQUEST
  };
}
export function orderSuccess({ data }) {
  return {
    type: ADD_ORDER_SUCCESS,
    payload: data
  };
}

export function orderFail({ message }) {
  return {
    type: ADD_ORDER_FAIL,
    payload: message
  };
}

export const addOrder = ({ file, name }) => {
  let data = new FormData();
  data.append("file", file);
  data.append("name", name);

  return dispatch => {
    dispatch(orderRequest());
    axios
      .post("http://localhost:8080/", data)
      .then(response => dispatch(orderSuccess(response)))
      .catch(error => dispatch(orderFail(error)));
  };
};

export const getOrders = () => {
  return dispatch => {
    axios
      .get(`http://localhost:8080/`)
      .then(res =>
        dispatch({
          type: GET_DATA,
          payload: res.data
        })
      )
      .catch(err => console.log(err));
  };
};
