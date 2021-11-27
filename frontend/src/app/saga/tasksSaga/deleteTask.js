import { toast } from 'react-toastify';
import { call, takeEvery } from 'redux-saga/effects'
import { api } from '../../../resources/api';
import { deleteTaskSuccess } from '../../store/actions/taskActions';
import { DELETE_TASK } from '../../store/actionTypes/taskActionTypes';

function* deleteTask({ payload, setSubmitting }) {
    try {
        const res = yield call(() => api.delete(`/tasks/remove/${payload}`))
        deleteTaskSuccess(res.data.task)
        setSubmitting(false)
        toast.success(res.data.message)
    } catch (e) {
        console.error(e);
        setSubmitting(false)
    }
}

export function* watchDeleteTask() {
    yield takeEvery(DELETE_TASK, deleteTask);
}