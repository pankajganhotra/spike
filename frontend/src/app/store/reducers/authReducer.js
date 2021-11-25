import { produce } from 'immer';
import { SET_AUTH } from '../actionTypes/authActionTypes';

const initialState = {
    auth: false,
    loading: false,
    user: null,
    error: null
}

const authReducer = produce((state, { type, payload }) => {
    switch (type) {
        case SET_AUTH:
            return {
                ...state,
                loading: false,
                auth: payload.auth,
                user: payload.user,
            }
        default:
            return state;
    }

}, initialState);

export default authReducer;