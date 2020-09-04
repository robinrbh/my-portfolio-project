import { apiUrl } from "../../config/constants"
import Axios from "axios"

export const FETCH_VENDORS_SUCCESS = "FETCH_VENDORS_SUCCES"
export const VENDORDETAILS_FETCHED = "VENDORDETAILS_FETCHED"

export const fetchVendorsSuccess = (vendors) => ({
	type: FETCH_VENDORS_SUCCESS,
	payload: vendors,
})

export const vendorDetailsFetched = (vendor) => ({
	type: VENDORDETAILS_FETCHED,
	payload: vendor,
})

export const fetchVendors = () => {
	return async (dispatch, getState) => {
		const response = await Axios.get(`${apiUrl}/vendors`)

		dispatch(fetchVendorsSuccess(response.data))
	}
}

export const fetchVendorById = (id) => {
	return async (dispatch, getState) => {
		const response = await Axios.get(`${apiUrl}/vendors/${id}`)
    
		dispatch(vendorDetailsFetched(response.data))
	}
}