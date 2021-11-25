import { produce } from 'immer';
import {
    GET_TASKS,
    GET_TASKS_SUCCESS,
    ADD_TASK_SUCCESS,
    UPDATE_TASK_SUCCESS,
    DELETE_TASK_SUCCESS,
} from '../actionTypes/taskActionTypes';

const initialState = {
    items: [],
    count: 0,
    loading: true,
}

const tasksReducer = produce((state, { type, payload }) => {
    switch (type) {
        case GET_TASKS:
            return {
                ...state,
                loading: true,
            }
        case GET_TASKS_SUCCESS:
            return {
                ...state,
                items: payload.items,
                count: payload.count,
                loading: false,
            }
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                items: [payload, ...state.items],
                count: state.count + 1,
            }
        case UPDATE_TASK_SUCCESS:
            return {
                ...state,
                items: state.items.map(item => item._id === payload._id ? payload : item),
            }
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                items: state.items.filter(item => item._id !== payload._id),
                count: state.count - 1,
            }
        default:
            return state;
    }

}, initialState);

export default tasksReducer;