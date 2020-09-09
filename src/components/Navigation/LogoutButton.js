import React from "react"
import { Button, Nav } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { racerLoggingOut } from "../../store/racer/actions"
import { selectRacerName, selectRacerToken } from "../../store/racer/selectors"
import { vendorLoggingOut } from "../../store/vendor/actions"
import {
	selectVendorName,
	selectVendorToken,
} from "../../store/vendor/selectors"

export default function LogoutButton() {
	const history = useHistory()
	const dispatch = useDispatch()
	const racerToken = useSelector(selectRacerToken)
	const vendorToken = useSelector(selectVendorToken)

	const vendor = useSelector(selectVendorName)
	const racer = useSelector(selectRacerName)
	const name = racerToken ? racer : vendorToken ? vendor : null

	const handleLogOut = () => {
		if (racerToken) {
			dispatch(racerLoggingOut())
		}
		if (vendorToken) {
			dispatch(vendorLoggingOut())
		}
		history.push("/")
	}

	return (
		<>
			<Nav.Item style={{ padding: ".5rem 1rem" }}>Welcome, {name}</Nav.Item>
			<Button variant="outline-light" onClick={handleLogOut}>
				Logout
			</Button>
		</>
	)
}
