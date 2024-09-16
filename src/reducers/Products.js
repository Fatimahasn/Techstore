import { GET_PRODUCTS, GET_PRODUCTS_LIST_FAILURE, GET_PRODUCTS_LIST_SUCCESS} from "constants/ActionTypes";

const INIT_STATE = {
    items: [],
    error: null
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
            }
        }
        case GET_PRODUCTS_LIST_FAILURE:{
            return {
                ...state,
                error: action.payload,
            }
        }
        case GET_PRODUCTS_LIST_SUCCESS: {
            return {
                ...state,
                items: action.payload
            }
        }
        default:
            return state;
    }
}