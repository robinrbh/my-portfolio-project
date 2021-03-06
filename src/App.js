import React from "react"
import { useSelector } from "react-redux"
import { Route, Switch } from "react-router-dom"
import Loading from "./components/Loading"
import MessageBox from "./components/MessageBox"
import Navigation from "./components/Navigation"
import CarDetails from "./pages/CarDetails"
import BookACar from "./components/Car/BookACar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import RacerProfile from "./pages/Racer/RacerDashboard"
import Signup from "./pages/Signup"
import VendorDashboard from "./pages/Vendor/VendorDashboard"
import VendorDetails from "./pages/VendorDetails"
import { selectAppLoading } from "./store/appState/selectors"
import { selectRacerToken } from "./store/racer/selectors"
import { selectVendorToken } from "./store/vendor/selectors"
import "./App.css"

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
			<div
				// className="logo"
				style={{
					width: "100%",
					borderBottom: "1px solid #c9c9c9",
					padding: "20px",
				}}
			>
				<img
					src="https://i.ibb.co/M73D2vJ/0d900108-fc44-476d-a492-a9533be032a9-200x200-1.png"
					alt="0d900108-fc44-476d-a492-a9533be032a9-200x200-1"
					border="0"
				/>
			</div>

			<Navigation />

			<MessageBox />
			<div className="main">
				{isLoading ? <Loading /> : null}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/cars/:id" component={CarDetails} />
					<Route path="/cars/:id/book" component={BookACar} />
					<Route path="/vendors/:id" component={VendorDetails} />
					<Route path="/userdashboard" component={Component} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
				</Switch>
			</div>
			<div
				className="footer"
				style={{
					width: "100%",
					borderTop: "1px solid #c9c9c9",
					padding: "10px",
				}}
			>
				<p>
					Made with{" "}
					<span role="img" aria-label="emoji">
						♥
					</span>{" "}
					by <a href="https://github.com/robinrbh">Robin</a>
				</p>
			</div>
		</div>
	)
}

export default App
