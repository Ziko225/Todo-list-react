import { call, put, throttle, takeEvery, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        const exapmleTasks = yield call(getExampleTasks)
        yield put(setTasks(exapmleTasks))
    } catch (error) {
        yield call(alert, "Coś poszło nie tak")
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks)
}

export function* watchFetchExpampleTasks() {
    yield throttle(2000, fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler)
}