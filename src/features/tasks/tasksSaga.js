import { call, put, throttle } from "@redux-saga/core/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {console.log("hello world")
    try {
        const exapmleTasks = yield call(getExampleTasks)
        yield put(setTasks(exapmleTasks))
    } catch (error) {
        yield call(alert, "Coś poszło nie tak")
    }
}

export function* watchFetchExpampleTasks() {
    yield throttle(2000, fetchExampleTasks.type, fetchExampleTasksHandler);
}