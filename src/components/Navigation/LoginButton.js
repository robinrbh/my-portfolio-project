import React from "react"

import Button from "react-bootstrap/Button"
import { useHistory } from "react-router-dom"

export default function LoginButton() {
	const history = useHistory()

	const goTo = () => {
		history.push("/login")
	}

	return (
		<>
			<Button onClick={goTo}>Login</Button>
		</>
	)
}
