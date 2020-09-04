import { FETCH_CARS_SUCCESS, FETCH_VENDORS_SUCCESS } from "./actions"

const initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CARS_SUCCESS:
			return action.payload

		case FETCH_VENDORS_SUCCESS:
			return action.payload

		default:
			return state
	}
}
