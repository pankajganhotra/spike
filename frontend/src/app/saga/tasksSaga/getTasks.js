import { call, takeLatest } from 'redux-saga/effects'
import { api } from '../../../resources/api';
import { getTasksSuccess } from '../../store/actions/taskActions';
import { GET_TASKS } from '../../store/actionTypes/taskActionTypes';

function* getTasks({ payload }) {
    try {
        const res = yield call(() => api.get("/tasks"))
        getTasksSuccess(res.data)
    } catch (e) {
        console.error(e);
    }
}

export function* watchGetTasks() {
    yield takeLatest(GET_TASKS, getTasks);
}