import { call, takeEvery } from 'redux-saga/effects'
import { api } from '../../../resources/api';
import { addTaskSuccess } from '../../store/actions/taskActions';
import { ADD_TASK } from '../../store/actionTypes/taskActionTypes';

function* addTask({ payload, setSubmitting }) {
    try {
        const res = yield call(() => api.post("/tasks/add", payload))
        addTaskSuccess(res.data.task)
        setSubmitting(false)
    } catch (e) {
        console.error(e);
        setSubmitting(false)
    }
}

export function* watchAddTask() {
    yield takeEvery(ADD_TASK, addTask);
}