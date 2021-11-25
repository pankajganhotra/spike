import { takeLatest, call } from "redux-saga/effects"
import { api } from "../../../resources/api"
import { setAuth } from "../../store/actions/authActions"

function* checkSession() {
    try {
        const res = yield call(() => api.get("/auth/session"))
        console.log(res.data)
        setAuth(res.data)
    } catch (e) {
        console.error(e)
        setAuth({}) //Sets loading false in auth reducer
    }
}


export function* watchCheckSession() {
    yield takeLatest("CHECK_SESSION", checkSession)
}