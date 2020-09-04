import React from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectRacerToken } from "../../store/racer/selectors"
import { selectVendorToken } from "../../store/vendor/selectors"
import { racerLoggingOut } from "../../store/racer/actions"
import { vendorLoggingOut } from "../../store/vendor/actions"
import { Button } from "react-bootstrap"

export default function LogoutButton() {
	const history = useHistory()
	const dispatch = useDispatch()
	const racerToken = useSelector(selectRacerToken)
	const vendorToken = useSelector(selectVendorToken)

	const handleLogOut = () => {
		if (racerToken) {
			dispatch(racerLoggingOut())
		}
		if (vendorToken) {
			dispatch(vendorLoggingOut())
		}
		history.push("/")
	}

	return <Button onClick={handleLogOut}>Logout</Button>
}
