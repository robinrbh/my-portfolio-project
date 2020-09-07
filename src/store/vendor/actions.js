import { apiUrl } from "../../config/constants"
import axios from "axios"
import { selectVendorToken } from "./selectors"
import {
	appLoading,
	appDoneLoading,
	showMessageWithTimeout,
	setMessage,
} from "../appState/actions"

export const LOGIN_SUCCESS_VENDOR = "LOGIN_SUCCESS_TEACHER"
export const TOKEN_STILL_VALID_VENDOR = "TOKEN_STILL_VALID_VENDOR"
export const LOG_OUT_VENDOR = "LOG_OUT_VENDOR"

const loginSuccessVendor = (vendorWithToken) => {
	return {
		type: LOGIN_SUCCESS_VENDOR,
		payload: vendorWithToken,
	}
}

const tokenStillValid = (vendorWithoutToken) => ({
	type: TOKEN_STILL_VALID_VENDOR,
	payload: vendorWithoutToken,
})

export const logOutVendor = () => ({ type: LOG_OUT_VENDOR })

export const vendorLoggingOut = () => {
	return function thunk(dispatch, getState) {
		dispatch(logOutVendor())
	}
}

export const loginVendor = (email, password, isRacer) => {
	return async (dispatch, getState) => {
		console.log("WHAT IS VENDOR", isRacer)
		dispatch(appLoading())
		try {
			const response = await axios.post(`${apiUrl}/login`, {
				email,
				password,
				isRacer,
			})

			console.log("WHAT IS RESPONSE", response.data)

			dispatch(loginSuccessVendor(response.data))
			dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500))
			dispatch(appDoneLoading())
		} catch (error) {
			if (error.response) {
				console.log(error.response.data.message)
				dispatch(setMessage("error", true, error.response.data.message))
			} else {
				console.log(error.message)
				dispatch(setMessage("error", true, error.message))
			}
			dispatch(appDoneLoading())
		}
	}
}

export const getVendorWithStoredToken = () => {
	return async (dispatch, getState) => {
		const token = selectVendorToken(getState())
		if (token === null) return

		dispatch(appLoading())
		try {
			const response = await axios.get(`${apiUrl}/vendor`, {
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
			dispatch(logOutVendor())
			dispatch(appDoneLoading())
		}
	}
}

export const createVendor = (isRacer, name, email, password) => {
	return async (dispatch, getState) => {
		dispatch(appLoading())
		try {
			const response = await axios.post(`${apiUrl}/signup`, {
				isRacer,
				name,
				email,
				password,
			})

			dispatch(loginSuccessVendor(response.data))
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
