import types from './types'

export function setCustomer(customer) {
	return { type: types.SET_CUSTOMER, customer };
}

export function requestPetShops() {
	return { type: types.REQUEST_PETSHOPS }
}

export function setPetshops(petshops) {
	return { type: types.SET_PETSHOPS, petshops };
}

export function setShopMapSelected(petshop) {
	return { type: types.SET_PETSHOP_MAP_SELECTED, petshop }
}

export function setMapCenter(location) {
	return { type: types.SET_MAP_CENTER, location }
}

export function requestPetshop(id) {
	return { type: types.REQUEST_PETSHOP, id }
}

export function setPetshop(petshop) {
	return { type: types.SET_PETSHOP, petshop }
}

export function toggleCartProduct(produto) {
	return { type: types.TOGGLE_CART_PRODUCT, produto }
}

export function setTransaction(transaction) {
	return { type: types.SET_TRANSACTION, transaction };
}

export function makePruchase() {
	return { type: types.MAKE_PURCHASE };
}

