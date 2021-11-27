import { produce } from "immer"
import { TOGGLE_TASK_MODAL } from "../actionTypes/modalActionTypes"

const initialState = {
    edit: null,
    taskModal: false,
}

const modalReducer = produce((state, { type, payload }) => {
    switch (type) {
        case TOGGLE_TASK_MODAL:
            return {
                ...state,
                taskModal: !state.taskModal,
                edit: payload
            }
        default:
            return state
    }
}, initialState)


export default modalReducer