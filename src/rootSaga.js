import { all } from "redux-saga/effects";
import { watchFetchExpampleTasks } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
    yield all([
        watchFetchExpampleTasks()
    ]);
};