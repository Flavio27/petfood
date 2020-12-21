import produce from 'immer'
import types from './types'

const INITIAL_STATE = {
	customer: {},
	petshops: [],
	petshop: {},
	petShopSelected: null,
	mapCenter: {
		lat: -23.561684,
		lng: -46.625378,
  },
  cart: [],
}

function shop(state = INITIAL_STATE, action) {
	switch (action.type) {
    case types.SET_CUSTOMER: {
      return produce(state, (draft) => {
        draft.transaction.customer = action.customer;
      });
    }

    case types.SET_PETSHOPS: {
      return produce(state, (draft) => {
        draft.petshops = action.petshops;
      });
    }

    case types.SET_PETSHOP_MAP_SELECTED: {
      return produce(state, (draft) => {
        draft.petshopMapSelected = action.petshop;
      });
    }

    case types.SET_MAP_CENTER: {
      return produce(state, (draft) => {
        draft.mapCenter = action.location;
      });
    }

    case types.SET_PETSHOP: {
      return produce(state, (draft) => {
        draft.petshop = action.petshop;
      });
    }

    case types.TOGGLE_CART_PRODUCT: {
      return produce(state, (draft) => {
        const index = draft.cart.findIndex((p) => p._id === action.produto._id);
        if (index ==! -1){
          draft.cart.splice(index, 1)
        }else{
          draft.cart.push(action.produto)
        }
      });
    }

		default:
			return state;
	}

}

export default shop