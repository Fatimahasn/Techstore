import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';

import {
    GET_CATEGORIES,
} from "constants/ActionTypes";
import {getCategoriesFailure,getCategoriesSuccess} from "actions/Category";

const getCategoriesList = async () =>
  await axios
    .get("http://localhost:3500/api/user/listCategories")
    .then((response) => response.data)
    .catch((error) => error);

  
function* getListOfCategories() {
    try {
      const response = yield call(getCategoriesList);
      console.log(response);
      yield put(getCategoriesSuccess(response.result));
    } catch (error) {
      console.error("Error fetching categories list: ", error);
      yield put(getCategoriesFailure(error.message)); 
    }
  }
  export function* categoriesList() {
    yield takeEvery(GET_CATEGORIES, getListOfCategories);
  
  }
  
  export default function* rootSaga() {
    yield all([fork(categoriesList)
    ]);
  }
  