import React from "react"
import { Switch, Route } from "react-router-dom"
import { selectAppLoading } from "./store/appState/selectors"

import Home from "./pages/Home"
import Navigation from "./components/Navigation"
import Loading from "./components/Loading"
import { useSelector } from "react-redux"

function App() {
	const isLoading = useSelector(selectAppLoading)

	return (
		<div>
			<div style={{ width: "100%", borderBottom: "1px solid #000" }}>
				<h1 style={{ paddingLeft: "20px" }}>Racing Valley</h1>
			</div>
			<Navigation />
			<div style={{ padding: "20px" }}>
				{isLoading ? <Loading /> : null}
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		</div>
	)
}

export default App
