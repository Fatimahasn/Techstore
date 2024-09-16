import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE} from "constants/ActionTypes";

export const getAllCategories = () => {
    return {
        type: GET_CATEGORIES,
    };
};
export const getCategoriesSuccess = (categories) => {
    return {
        type: GET_CATEGORIES_SUCCESS,
        payload: categories
    };
};

export const getCategoriesFailure = (error) => {
    return{
        type: GET_CATEGORIES_FAILURE,
        payload: error
    }
}; 
