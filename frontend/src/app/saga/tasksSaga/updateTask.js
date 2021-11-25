import { call, takeEvery } from 'redux-saga/effects'
import { api } from '../../../resources/api';
import { updateTaskSuccess } from '../../store/actions/taskActions';
import { UPDATE_TASK } from '../../store/actionTypes/taskActionTypes';

function* updateTask({ payload, setSubmitting }) {
    try {
        const res = yield call(() => api.put(`/tasks/update/${payload._id}`, payload))
        updateTaskSuccess(res.data.task)
        setSubmitting(false)
    } catch (e) {
        console.error(e);
        setSubmitting(false)
    }
}

export function* watchUpdateTask() {
    yield takeEvery(UPDATE_TASK, updateTask);
}