import {
    GET_DATA,
    ADD_ORDER
} from '../actions/type';

const initialState = {
    data: [],
    order: {},
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
                order: action.payload,
            };

        default:
            return state;
    };
};

export default updateReducer;