import React, { useEffect } from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavbarItem from "./NavbarItem"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

import { selectVendorName } from "../../store/vendor/selectors"
import { selectRacerName } from "../../store/racer/selectors"
import { selectRacerToken } from "../../store/racer/selectors"
import { selectVendorToken } from "../../store/vendor/selectors"
import { getRacerWithStoredToken } from "../../store/racer/actions"
import { useDispatch } from "react-redux"
import { getVendorWithStoredToken } from "../../store/vendor/actions"

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
			<Navbar bg="light" expand="lg">
				<Navbar.Brand as={NavLink} to="/">
					<p>Racing Valley</p>
				</Navbar.Brand>
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
