const INITIAL_STATE = {
	customer: {},
}

function shop(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SET_COSTUMER': {
			//logica
			break;
		}
		default:
			return state;


	}

}

export default shop