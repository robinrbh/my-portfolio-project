import { apiUrl } from "../../config/constants"
import Axios from "axios"

export const CARDETAILS_FETCHED = "CARDETAILS_FETCHED"

export const carDetailsFetched = (car) => ({
	type: CARDETAILS_FETCHED,
	payload: car,
})

export const fetchCarById = (id) => {
	return async (dispatch, getState) => {
		const response = await Axios.get(`${apiUrl}/cars/${id}`)

		dispatch(carDetailsFetched(response.data))
	}
}
