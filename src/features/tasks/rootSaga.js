import { all } from "redux-saga/effects";
import { watchFetchExpampleTasks } from "./tasksSaga";

export default function* rootSaga() {
    yield all([
        watchFetchExpampleTasks()
    ]);
};