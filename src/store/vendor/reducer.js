import {
	LOG_OUT_VENDOR,
	LOGIN_SUCCESS_VENDOR,
	TOKEN_STILL_VALID_VENDOR,
	UPLOAD_LOGO_SUCCESS,
} from "./actions"

const initialState = {
	token: localStorage.getItem("vendor_token"),
	name: null,
	email: null,
	imageUrl: null,
	id: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS_VENDOR:
			localStorage.setItem("vendor_token", action.payload.token)
			return { ...state, ...action.payload }

		case LOG_OUT_VENDOR:
			localStorage.removeItem("vendor_token")
			return { ...initialState, token: null }

		case TOKEN_STILL_VALID_VENDOR:
			return { ...state, ...action.payload }

		case UPLOAD_LOGO_SUCCESS:
			return { ...state, imageUrl: action.payload }

		// case ADD_SUBJECT:
		//   if (state.subjects) {
		//     return { ...state, subjects: [...state.subjects, action.payload] };
		//   } else {
		//     return { ...state, subjects: [action.payload] };
		//   }

		default:
			return state
	}
}
