import { combineReducers } from "redux"

import AuthReducer from "./authReducer"
import TasksReducer from "./taskReducer";
// import UserReducer from "./"


const rootReducer = combineReducers({
    auth: AuthReducer,
    tasks: TasksReducer
})

export default rootReducer;