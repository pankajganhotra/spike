import { all } from "redux-saga/effects"

import { watchCheckSession } from "./authSaga"
import {
    watchGetTasks, watchAddTask,
    watchUpdateTask, watchDeleteTask,
} from './tasksSaga'

export default function* rootSaga() {
    yield all([
        //auth
        watchCheckSession(),
        // tasks
        watchGetTasks(),
        watchAddTask(),
        watchUpdateTask(),
        watchDeleteTask(),
    ])
}
