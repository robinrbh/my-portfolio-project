import {
	CARDETAILS_FETCHED,
} from "./actions"

const initialState = []

export default (state = initialState, action) => {

	switch (action.type) {
		case CARDETAILS_FETCHED:
			return action.payload

		default:
			return state
	}
}
