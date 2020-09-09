import React, { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { selectRacerId } from "../../store/racer/selectors"
import { selectVendorId } from "../../store/vendor/selectors"
import { loginRacer } from "../../store/racer/actions"
import { loginVendor } from "../../store/vendor/actions"

import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { Col } from "react-bootstrap"

export default function SignUp() {
	const history = useHistory()
	const dispatch = useDispatch()

	const [status, setStatus] = useState(1)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const racerId = useSelector(selectRacerId)
	const vendorId = useSelector(selectVendorId)

	useEffect(() => {
		if (racerId !== null) {
			history.push(`/userdashboard`)
		}
		if (vendorId !== null) {
			history.push(`/userdashboard`)
		}
	}, [racerId, vendorId, history])

	function submitForm(event) {
		event.preventDefault()

		if (status === "1") {
			dispatch(loginRacer(email, password, status))
		} else {
			dispatch(loginVendor(email, password, status))
		}
	}

	return (
		<Container>
			<Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
				<h1 className="mt-5 mb-5">Login</h1>
				<Form.Group value={status} onChange={(e) => setStatus(e.target.value)}>
					<Form.Check
						type="radio"
						value={1}
						label="Racer"
						name="formHorizontalRadios"
						id="formHorizontalRadios1"
					/>
					<Form.Check
						type="radio"
						value={2}
						label="Vendor"
						name="formHorizontalRadios"
						id="formHorizontalRadios2"
					/>
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						type="email"
						placeholder="Enter email"
						required
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						type="password"
						placeholder="Password"
						required
					/>
				</Form.Group>
				<Form.Group className="mt-5">
					<Button variant="dark" type="submit" onClick={submitForm}>
						Log in
					</Button>
				</Form.Group>
				<Link to="/signup" style={{ textAlign: "center" }}>
					Click here to sign up
				</Link>
			</Form>
		</Container>
	)
}
