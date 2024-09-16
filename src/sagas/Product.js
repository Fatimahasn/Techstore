import { all, call, fork, put, takeEvery,takeLeading } from "redux-saga/effects";
import axios from 'axios';

import {
    GET_PRODUCTS,
} from "constants/ActionTypes";
import {getProductsListFailure,getProductsListSuccess} from "actions/Product";


const getProductsList = async () =>
  await axios
    .get("http://localhost:3500/api/user/listproducts")
    .then((response) => response.data)
    .catch((error) => error);

  


function* getListOfProducts() {
  try {
    const products = yield call(getProductsList);
    console.log("products: ", products)
    yield put(getProductsListSuccess(products.result));
  } catch (error) {
    console.error("Error fetching products list: ", error);
    yield put(getProductsListFailure(error.message)); 
  }
}

  


export function* productsList() {
  yield takeEvery(GET_PRODUCTS, getListOfProducts);

}

export default function* rootSaga() {
  yield all([fork(productsList)
  ]);
}
