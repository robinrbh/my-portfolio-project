import React from "react"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

export default function LoginButton() {
	return (
		<>
			<Link to={"/login"}>
				<Button variant="outline-light">Login</Button>
			</Link>
		</>
	)
}
