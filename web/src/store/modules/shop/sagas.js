import { takeLatest, all, call } from 'redux-saga/effects'
import types from './types'
import api from '../../../services/api'
import {setPetShops} from './actions'

export function* requestPetShops() {
	const response = yield call(api.get, '/pethops');
	const res = response.data;

}

export default all([takeLatest(types.REQUEST_PETSHOPS, requestPetShops)]);