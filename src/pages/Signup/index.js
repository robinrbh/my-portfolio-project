import React, { useState } from "react"
import { Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"

import { createRacer } from "../../store/racer/actions"
import { createVendor } from "../../store/vendor/actions"

export default function SignUp() {
	const [status, setStatus] = useState(1)
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const dispatch = useDispatch()

	const history = useHistory()

	const createUser = () => {
		if (status === "1") {
			dispatch(createRacer(status, name, email, password))
			history.push(`/`)
		} else {
			dispatch(createVendor(status, name, email, password))
			history.push(`/`)
		}
	}

	return (
		<Container>
			<Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
				<h1 className="mt-5 mb-5">Signup</h1>
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
				<Form.Group controlId="formBasicName">
					<Form.Label>First name</Form.Label>
					<Form.Control
						value={name}
						onChange={(event) => setName(event.target.value)}
						type="text"
						placeholder="Enter name"
						required
					/>
				</Form.Group>

				<Form.Group controlId="FormCheck">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						type="email"
						placeholder="Enter email"
						required
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
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
					<Button variant="dark" type="submit" onClick={() => createUser()}>
						Sign up
					</Button>
				</Form.Group>
				<Link to="/login">Click here to log in</Link>
			</Form>
		</Container>
	)
}
