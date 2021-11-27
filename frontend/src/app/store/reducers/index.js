import { combineReducers } from "redux"

import AuthReducer from "./authReducer"
import TasksReducer from "./taskReducer";
import ModalsReducer from "./modalReducer";
// import UserReducer from "./"


const rootReducer = combineReducers({
    auth: AuthReducer,
    tasks: TasksReducer,
    modals: ModalsReducer
})

export default rootReducer;