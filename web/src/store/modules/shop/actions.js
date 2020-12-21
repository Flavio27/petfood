import types from './types'

export function setCustomer(customer) {
	return { type: types.SET_CUSTOMER, customer }
}
export function requestPetShops() {
	return { type: types.REQUEST_PETSHOPS}
}
export function setPetShops(petshops) {
	return { type: types.SET_PETSHOPS, petshops }
}
export function setShopMapSelected(petshop) {
	return { type: types.SET_PETSHOPS, petshop }
}
export function setMapCenter(location) {
	return { type: types.SET_MAP_CENTER, location }
}