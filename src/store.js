import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import { watchFetchExpampleTasks } from "./features/tasks/tasksSaga";
import tasksReducer from "./features/tasks/tasksSlice";
import rootSaga from "./features/tasks/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga)

export default store;