import { call, delay, put, throttle, takeEvery, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, fetchExampleTasksLoading, fetchExampleTasksError } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(500)
        const exapmleTasks = yield call(getExampleTasks)
        yield put(fetchExampleTasksLoading(exapmleTasks))
    } catch {
        yield put(fetchExampleTasksError())
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks)
};

export function* watchFetchExpampleTasks() {
    yield throttle(2000, fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler)
};