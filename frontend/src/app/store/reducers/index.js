import { combineReducers } from "redux"

import AuthReducer from "./authReducer"
// import UserReducer from "./"


const rootReducer = combineReducers({
    auth: AuthReducer
})

export default rootReducer;