import { combineReducers } from "redux"
import appState from "./appState/reducer"
import cars from "./cars/reducer"
import carDetails from "./carDetails/reducer"
import vendors from "./vendorsDetails/reducer"
import vendorsDetails from "./vendorsDetails/reducer"
import vendor from "./vendor/reducer"
import racer from "./racer/reducer"

export default combineReducers({
	appState,
	cars,
	carDetails,
	vendors,
	vendorsDetails,
	vendor,
	racer,
})
