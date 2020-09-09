import React, { useEffect } from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { getRacerWithStoredToken } from "../../store/racer/actions"
import { selectRacerToken } from "../../store/racer/selectors"
import { getVendorWithStoredToken } from "../../store/vendor/actions"
import { selectVendorToken } from "../../store/vendor/selectors"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import NavbarItem from "./NavbarItem"

export default function Navigation() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getRacerWithStoredToken())
		dispatch(getVendorWithStoredToken())
	}, [dispatch])

	const tokenRacer = useSelector(selectRacerToken)
	const tokenVendor = useSelector(selectVendorToken)

	const linkText = tokenRacer
		? "My Profile"
		: tokenVendor
		? "My Dashboard"
		: null

	const item = linkText && (
		<>
			<NavbarItem path="/userdashboard" linkText={linkText} />
		</>
	)

	const loginLogoutControls =
		tokenRacer || tokenVendor ? <LogoutButton /> : <LoginButton />

	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg" style={{ color: "#fff" }}>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav style={{ width: "100%" }} fill>
						<NavbarItem path="/" linkText="Home" />
						{item}
						{loginLogoutControls}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}
