import {
	LOGIN_SUCCESS_RACER,
	TOKEN_STILL_VALID_RACER,
	LOG_OUT_RACER,
} from "./actions"

const initialState = {
	token: localStorage.getItem("racer_token"),
	name: null,
	email: null,
	id: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS_RACER:
			localStorage.setItem("racer_token", action.payload.token)
			return { ...state, ...action.payload }

		case TOKEN_STILL_VALID_RACER:
			return { ...state, ...action.payload }

		case LOG_OUT_RACER:
			localStorage.removeItem("racer_token")
			return { ...initialState, token: null }

		default:
			return state
	}
}
