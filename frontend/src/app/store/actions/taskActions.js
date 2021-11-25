import store from "..";


import {
    GET_TASKS,
    GET_TASKS_SUCCESS,
    ADD_TASK,
    ADD_TASK_SUCCESS,
    UPDATE_TASK,
    UPDATE_TASK_SUCCESS,
    DELETE_TASK,
    DELETE_TASK_SUCCESS
} from "../actionTypes/taskActionTypes";

export const getTasks = (payload) => {
    store.dispatch({
        type: GET_TASKS, payload
    });
}

export const getTasksSuccess = (payload) => {
    store.dispatch({
        type: GET_TASKS_SUCCESS, payload
    });
}

export const addTask = (payload, setSubmitting) => {
    store.dispatch({
        type: ADD_TASK, payload, setSubmitting
    });
}

export const addTaskSuccess = (payload) => {
    store.dispatch({
        type: ADD_TASK_SUCCESS, payload
    });
}

export const updateTask = (payload, setSubmitting) => {
    store.dispatch({
        type: UPDATE_TASK, payload, setSubmitting
    });
}

export const updateTaskSuccess = (payload) => {
    store.dispatch({
        type: UPDATE_TASK_SUCCESS, payload
    });
}

export const deleteTask = (payload, setSubmitting) => {
    store.dispatch({
        type: DELETE_TASK, payload, setSubmitting
    });
}

export const deleteTaskSuccess = (payload) => {
    store.dispatch({
        type: DELETE_TASK_SUCCESS, payload
    });
}



