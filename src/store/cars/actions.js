import { apiUrl } from "../../config/constants"
import Axios from "axios"

export const FETCH_CARS_SUCCESS = "FETCH_CARS_SUCCESS"
export const FETCH_VENDORS_SUCCESS = "FETCH_VENDORS_SUCCES"

export const fetchCarsSuccess = (cars) => ({
	type: FETCH_CARS_SUCCESS,
	payload: cars,
})

export const fetchCars = () => {
	return async (dispatch, getState) => {
		const response = await Axios.get(`${apiUrl}/cars`)

		dispatch(fetchCarsSuccess(response.data))
	}
}