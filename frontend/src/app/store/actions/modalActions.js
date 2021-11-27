import store from ".."
import { TOGGLE_TASK_MODAL } from "../actionTypes/modalActionTypes"


export const toggleTaskModal = (payload) => {
    store.dispatch({
        type: TOGGLE_TASK_MODAL,
        payload
    })
}