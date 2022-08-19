import { call, put, takeEvery } from "@redux-saga/core/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        const exapmleTasks = yield call(getExampleTasks)
        yield put(setTasks(exapmleTasks))
    } catch (error) {
        yield call(alert, "Coś poszło nie tak")
    }
}

export function* watchFetchExpampleTasks() {
    console.log("saga ok")
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}