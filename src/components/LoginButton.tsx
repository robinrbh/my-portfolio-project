import React from "react"
import { useHistory } from "react-router-dom"

export default function LoginButton() {
	const history = useHistory()

	const goTo = () => {
		history.push("/login")
	}

	return <button onClick={goTo}>Login</button>
}
