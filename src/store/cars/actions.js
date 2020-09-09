import Axios from "axios"
import { apiUrl } from "../../config/constants"
import {
	appDoneLoading,
	appLoading,
	showMessageWithTimeout,
} from "../appState/actions"
import { selectRacer } from "../racer/selectors"
import { selectVendor } from "../vendor/selectors"

export const FETCH_CARS_SUCCESS = "FETCH_CARS_SUCCESS"
export const FETCH_VENDORS_SUCCESS = "FETCH_VENDORS_SUCCES"
export const POST_BOOKING_SUCCESS = "POST_BOOKING_SUCCESS"
export const ADD_NEW_CAR_SUCCESS = "ADD_NEW_CAR_SUCCESS"

export const fetchCarsSuccess = (cars) => ({
	type: FETCH_CARS_SUCCESS,
	payload: cars,
})

export const postBookingSuccess = (bookings) => ({
	type: POST_BOOKING_SUCCESS,
	payload: bookings,
})

export const addNewCarSuccess = (car) => ({
	type: ADD_NEW_CAR_SUCCESS,
	payload: car,
})

export const fetchCars = () => {
	return async (dispatch, getState) => {
		dispatch(appLoading())

		const response = await Axios.get(`${apiUrl}/cars`)

		dispatch(fetchCarsSuccess(response.data))
		dispatch(appDoneLoading())
	}
}

export const bookCar = (location) => {
	return async (dispatch, getState) => {
		dispatch(appLoading())

		const { token } = selectRacer(getState())
		const id = getState().carDetails.id

		const response = await Axios.post(
			`${apiUrl}/cars/${id}/book`,
			{
				carId: id,
				racerId: getState().racer.id,
				trackId: location,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)

		dispatch(
			showMessageWithTimeout(
				"success",
				false,
				"You successfully made a booking!",
				3000
			)
		)
		dispatch(postBookingSuccess(response.data))
		dispatch(appDoneLoading())
	}
}

export const addNewCar = (
	brand,
	model,
	bhp,
	description,
	gearbox,
	imageUrl
) => {
	return async (dispatch, getState) => {
		dispatch(appLoading())

		const { token } = selectVendor(getState())
		// const id = getState().carDetails.id

		const response = await Axios.post(
			`${apiUrl}/cars`,
			{
				brand,
				model,
				bhp,
				description,
				gearbox,
				imageUrl,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)

		dispatch(
			showMessageWithTimeout(
				"success",
				false,
				"You successfully made a booking!",
				3000
			)
		)
		dispatch(addNewCarSuccess(response.data))
		dispatch(appDoneLoading())
	}
}
