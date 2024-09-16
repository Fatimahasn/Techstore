import { GET_PRODUCTS, GET_PRODUCTS_LIST_FAILURE, GET_PRODUCTS_LIST_SUCCESS} from "constants/ActionTypes";

export const getAllProducts = () => {
    return {
        type: GET_PRODUCTS
    };
};

export const getProductsListFailure = (error) => {
    return{
        type: GET_PRODUCTS_LIST_FAILURE,
        payload: error
    }
}; 

export const getProductsListSuccess = (products) => {
    console.log("success: ",products)
    return{
        type: GET_PRODUCTS_LIST_SUCCESS,
        payload: products
    }
}; 