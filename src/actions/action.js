import axios from 'axios';

import {
    GET_DATA,
    ADD_ORDER
} from './type';

export function uploadSuccess({ data }) {
    return {
      type: 'UPLOAD_DOCUMENT_SUCCESS',
      data,
    };
  }
  
  export function uploadFail(error) {
    return {
      type: 'UPLOAD_DOCUMENT_FAIL',
      error,
    };
  }

export const addOrder = ({ file, name }) => {
    let data = new FormData();
    data.append('file', document);
    data.append('name', name);

    return (dispatch) => {
        axios.post('/files', data)
            .then(response => dispatch(uploadSuccess(response)))
            .catch(error => dispatch(uploadFail(error)))
    };
};
