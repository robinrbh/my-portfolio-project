import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { OnChange, OnClick } from "../types-app-wide/EventListeners"
import { User } from "../types-app-wide/UserTypes"

export default function Login() {
	const dispatch = useDispatch()

	const [loginInput, setLoginInput] = useState<User>({
		email: "r@r.nl",
		password: "1234",
	})

	function login(e: OnClick) {
		// dispatch(login)
		e.preventDefault()

		console.log(loginInput)
	}

	return (
		<div>
			<form action="">
				<input
					value={loginInput.email}
					onChange={(e: OnChange) => setLoginInput({ ...loginInput, email: e.target.value })}
					type="text"
				/>
				<input
					value={loginInput.password}
					onChange={(e: OnChange) =>
						setLoginInput({ ...loginInput, password: e.target.value })
					}
					type="password"
				/>
				<button onClick={login}>Login</button>
			</form>
		</div>
	)
}
