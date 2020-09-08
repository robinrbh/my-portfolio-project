import {
	FETCH_VENDORS_SUCCESS,
	VENDORDETAILS_FETCHED,
	POST_REVIEW_SUCCESS,
} from "./actions"

const initialState = {
	ratings: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_VENDORS_SUCCESS:
			return action.payload

		case VENDORDETAILS_FETCHED:
			return action.payload

		case POST_REVIEW_SUCCESS:
			return { ...state, ...action.payload }

		default:
			return state
	}
}
