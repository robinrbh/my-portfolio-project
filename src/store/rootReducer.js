import { combineReducers } from "redux"
import appState from "./appState/reducer"
import cars from "./cars/reducer"

export default combineReducers({
  appState,
  cars,
})
