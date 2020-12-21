import produce from 'immer'
import types from './types'

const INITIAL_STATE = {
	customer: {},
	petshops: [],
	petShopSelected: null,
	mapCenter: {
		lat: -23.561684,
		lng: -46.625378,
	}
}

function shop(state = INITIAL_STATE, action) {
	switch (action.type) {
		case types.SET_CUSTOMER: {
			return produce(state, (draft) => {
				draft.customer = action.customer;
			});
		}

		case types.SET_PETSHOPS: {
			return produce(state, (draft) => {
				draft.petshops = action.petshops;
			});
		}

		case types.SET_PETSHOP_MAP_SELECTED: {
			return produce(state, (draft) => {
				draft.petShopSelected = action.petshop;
			});
		}

		case types.SET_MAP_CENTER: {
			return produce(state, (draft) => {
				draft.mapCenter = action.location;
			});
		}

		default:
			return state;
	}

}

export default shop