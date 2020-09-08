import { apiUrl } from "../../config/constants"
import Axios from "axios"

export const FETCH_VENDORS_SUCCESS = "FETCH_VENDORS_SUCCES"
export const VENDORDETAILS_FETCHED = "VENDORDETAILS_FETCHED"
export const POST_REVIEW_SUCCESS = "POST_REVIEW_SUCCESS"

export const fetchVendorsSuccess = (vendors) => ({
	type: FETCH_VENDORS_SUCCESS,
	payload: vendors,
})

export const vendorDetailsFetched = (vendor) => ({
	type: VENDORDETAILS_FETCHED,
	payload: vendor,
})

export const postReviewSuccess = (review) => ({
	type: POST_REVIEW_SUCCESS,
	payload: review,
})

export const fetchVendors = () => {
	return async (dispatch, getState) => {
		const response = await Axios.get(`${apiUrl}/vendors`)
		console.log("WHAT IS VENDORS (/VENDORSDETAILS)", response.data)

		dispatch(fetchVendorsSuccess(response.data))
	}
}

export const fetchVendorById = (id) => {
	return async (dispatch, getState) => {
		const response = await Axios.get(`${apiUrl}/vendors/${id}`)

		dispatch(vendorDetailsFetched(response.data))
	}
}

export const postReview = (comment, rating) => {
	return async (dispatch, getState) => {
		// console.log(getState())
		const id = getState().vendors.id
		const response = await Axios.post(`${apiUrl}/vendors/${id}`, {
			comment,
			rating,
		})

		console.log("response", response)

		dispatch(postReviewSuccess(response.data))
	}
}
