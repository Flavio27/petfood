import { takeLatest, all, call, put } from 'redux-saga/effects'
import types from './types'
import api from '../../../services/api'
import { setPetShops } from './actions'


export function* requestPetShops() {
	const response = yield call(api.get, '/petshops');
	const res = response.data;
	yield put(setPetShops(res.petshops));

}

export default all([takeLatest(types.REQUEST_PETSHOPS, requestPetShops)]);