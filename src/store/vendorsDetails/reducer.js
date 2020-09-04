import { FETCH_VENDORS_SUCCESS, VENDORDETAILS_FETCHED } from "./actions"

const initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_VENDORS_SUCCESS:
			return action.payload

		case VENDORDETAILS_FETCHED:
			return action.payload

		default:
			return state
	}
}
