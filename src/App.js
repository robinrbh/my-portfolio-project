import React from "react"
import { Switch, Route } from "react-router-dom"
import { selectAppLoading } from "./store/appState/selectors"

import Home from "./pages/Home"
import Navigation from "./components/Navigation"
import Loading from "./components/Loading"
import { useSelector } from "react-redux"
import MessageBox from "./components/MessageBox"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import CarDetails from "./pages/CarDetails"
import VendorDetails from "./pages/VendorDetails"
import VendorDashboard from "./pages/Vendor/VendorDashboard"
import RacerProfile from "./pages/Racer/RacerDashboard"
import { selectRacerToken } from "./store/racer/selectors"
import { selectVendorToken } from "./store/vendor/selectors"

function App() {
	const isLoading = useSelector(selectAppLoading)
	const tokenRacer = useSelector(selectRacerToken)
	const tokenVendor = useSelector(selectVendorToken)
	const Component = tokenRacer
		? RacerProfile 
		: tokenVendor
			? VendorDashboard 
			: null

	return (
		<div>
			<div style={{ width: "100%", borderBottom: "1px solid #000" }}>
				<h1 style={{ paddingLeft: "20px" }}>Racing Valley</h1>
			</div>
			<Navigation />
			<MessageBox />
			<div style={{ padding: "20px" }}>
				{isLoading ? <Loading /> : null}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/cars/:id" component={CarDetails} />
					<Route path="/vendors/:id" component={VendorDetails} />
					<Route path="/userdashboard" component={Component} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
				</Switch>
			</div>
		</div>
	)
}

export default App
