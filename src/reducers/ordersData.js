import {
    GET_DATA
} from '../actions/type';

const initialState = {
    orders: [{name:'useName'}],
};

const orders = (state = initialState, action) => {
    switch (action.type) {

        case GET_DATA:
            return {
                ...state,
                orders: action.payload
            };

        default:
            return state;
    };
};

export default orders;