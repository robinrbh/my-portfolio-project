import React from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectRacerToken, selectRacerName } from "../../store/racer/selectors"
import {
	selectVendorToken,
	selectVendorName,
} from "../../store/vendor/selectors"
import { racerLoggingOut } from "../../store/racer/actions"
import { vendorLoggingOut } from "../../store/vendor/actions"
import { Button, Nav } from "react-bootstrap"

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
