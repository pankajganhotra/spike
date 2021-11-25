import store from "..";

import { CHECK_SESSION, SET_AUTH } from "../actionTypes/authActionTypes"



export const checkSession = (payload) => {
    store.dispatch({
        type: CHECK_SESSION,
        payload
    })
}

export const setAuth = (payload) => {
    store.dispatch({
        type: SET_AUTH,
        payload
    })
}