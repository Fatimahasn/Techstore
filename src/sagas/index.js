import {all} from 'redux-saga/effects';
import authSagas from './Auth';
import productSagas from './Product';
import categorySagas from './Category';
export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        productSagas(),
        categorySagas()
    ]);
}
