import axios from 'axios';

import {
    GET_DATA,
    ADD_ORDER
} from './type';

export function uploadSuccess({ data }) {
    return {
        type: ADD_ORDER,
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
    data.append('file', file);
    data.append('name', name);

    return (dispatch) => {
        axios.post('http://localhost:5000/', data)
            .then(response => dispatch(uploadSuccess(response)))
            .catch(error => dispatch(uploadFail(error)))
    };
};


export const getOrders = () => {
    return (dispatch) => {
        // axios.get(`https://bloggy-api.herokuapp.com/posts`)
        axios.get(`http://localhost:5000/`)
            .then(res => dispatch({
                type: GET_DATA,
                payload: res.data
            }))
            .catch(err => console.log(err));
    }

}
