import { apiUrl } from "../../config/constants"
import axios from "axios"
import { selectRacerToken } from "./selectors"
import {
	appLoading,
	appDoneLoading,
	showMessageWithTimeout,
	setMessage,
} from "../appState/actions"

export const LOGIN_SUCCESS_RACER = "LOGIN_SUCCESS_RACER"
export const TOKEN_STILL_VALID_RACER = "TOKEN_STILL_VALID_RACER"
export const LOG_OUT_RACER = "LOG_OUT_RACER"
export const FETCH_DETAILS_RACER = "FETCH_DETAILS_RACER"

const loginSuccessRacer = (userWithToken) => {
	return {
		type: LOGIN_SUCCESS_RACER,
		payload: userWithToken,
	}
}

const tokenStillValid = (userWithoutToken) => ({
	type: TOKEN_STILL_VALID_RACER,
	payload: userWithoutToken,
})

const racerDetailsFetched = (racer) => {
	return {
		type: FETCH_DETAILS_RACER,
		payload: racer,
	}
}

export const loginRacer = (email, password, isRacer) => {
	return async (dispatch, getState) => {
		dispatch(appLoading())
		try {
			const response = await axios.post(`${apiUrl}/login`, {
				email,
				password,
				isRacer,
			})

			dispatch(loginSuccessRacer(response.data))
			dispatch(showMessageWithTimeout("success", false, "Welcome back!", 1500))
			dispatch(appDoneLoading())
		} catch (error) {
			if (error.response) {
				dispatch(setMessage("error", true, error.response.data.message))
			} else {
				dispatch(setMessage("error", true, error.message))
			}
			dispatch(appDoneLoading())
		}
	}
}

export const fetchRacers = () => {
	return async (dispatch, getState) => {
		const response = await axios.get(`${apiUrl}/racers`)

		dispatch(racerDetailsFetched(response.data))
	}
}

export const fetchRacerById = (id) => {
	return async (dispatch, getState) => {
		const response = await axios.get(`${apiUrl}/racers/${id}`)

		dispatch(racerDetailsFetched(response.data))
	}
}

export const getRacerWithStoredToken = () => {
	return async (dispatch, getState) => {
		const token = selectRacerToken(getState())
		if (token === null) return

		dispatch(appLoading())
		try {
			const response = await axios.get(`${apiUrl}/racer`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			dispatch(tokenStillValid(response.data))
			dispatch(appDoneLoading())
		} catch (error) {
			if (error.response) {
				console.log(error.response.message)
			} else {
				console.log(error)
			}
			dispatch(logOutRacer())
			dispatch(appDoneLoading())
		}
	}
}

export const racerLoggingOut = () => {
	return function thunk(dispatch, getState) {
		dispatch(logOutRacer())
	}
}

export const logOutRacer = () => ({ type: LOG_OUT_RACER })

export function createRacer(isRacer, name, email, password) {
	return async function thunk(dispatch, getState) {
		dispatch(appLoading())
		try {
			const response = await axios.post(`${apiUrl}/signup`, {
				isRacer,
				name,
				email,
				password,
			})

			console.log("response", response.data)

			dispatch(loginSuccessRacer(response.data))
			dispatch(showMessageWithTimeout("success", true, response.data.message))
			dispatch(appDoneLoading())
		} catch (error) {
			if (error.response) {
				console.log(error.response.data.message)
				dispatch(setMessage("danger", true, error.response.data.message))
			} else {
				console.log(error.message)
				dispatch(setMessage("danger", true, error.message))
			}
			dispatch(appDoneLoading())
		}
	}
}
