import React from "react"
import { Switch, Route } from "react-router-dom"
import { selectAppLoading } from "./store/appState/selectors"

import Home from "./pages/Home"
import Navigation from "./components/Navigation"
import Loading from "./components/Loading"
import { useSelector } from "react-redux"
import Login from "./pages/Login"
import CarDetails from "./pages/CarDetails"
import VendorDetails from "./pages/VendorDetails"
import VendorDashboard from "./pages/Vendor/VendorDashboard"
import RacerProfile from "./pages/Racer/RacerDashboard"


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
					<Route path="/cars/:id" component={CarDetails} />
					<Route path="/vendors/:id" component={VendorDetails} />
					<Route path="/mydashboard" component={VendorDashboard} />
					<Route path="/myprofile" component={RacerProfile} />
					<Route path="/login" component={Login} />
				</Switch>
			</div>
		</div>
	)
}

export default App
