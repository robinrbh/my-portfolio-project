import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavbarItem from "./NavbarItem"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

import { selectVendorName } from "../../store/vendor/selectors"
import { selectRacerToken } from "../../store/racer/selectors"
import { selectVendorToken } from "../../store/vendor/selectors"

export default function Navigation() {
	const tokenRacer = useSelector(selectRacerToken)
	const tokenVendor = useSelector(selectVendorToken)

	const menuItems = () => {
		if (tokenVendor) {
			return <NavbarItem path="/mydashboard" linkText="My Dashboard" />
		} else if (tokenRacer) {
			return <NavbarItem path="/myprofile" linkText="My Profile" />
		} else {
			return null
		}
	}

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
						{menuItems()}
						{loginLogoutControls}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}
