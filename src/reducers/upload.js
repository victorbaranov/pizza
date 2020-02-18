import {
    GET_DATA,
    ADD_ORDER
} from '../actions/type';

const initialState = {
    data: [],
    orders: {},
    status:'',
};

const updateReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DATA:
            return {
                ...state,
                data: action.payload,
            };

        case ADD_ORDER:
            return {
                ...state,
                status:'request',
                // orders: action.payload,
            };

        default:
            return state;
    };
};

export default updateReducer;