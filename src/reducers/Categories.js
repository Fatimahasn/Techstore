import { GET_CATEGORIES,GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE } from "constants/ActionTypes";

const INIT_STATE = {
    categoriesList: [],
    error: null
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES: {
            return {
                ...state
            }
        }
        case GET_CATEGORIES_SUCCESS: {
            return {
                ...state,
                categoriesList: action.payload
            }
        }
        case GET_CATEGORIES_FAILURE:{
            return {
                ...state,
                error: action.payload,
            }
        }
        default:
            return state;
    }
}