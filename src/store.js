import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import { watchTetchExpampleTasks } from "./features/tasks/tasksSaga";
import tasksReducer from "./features/tasks/tasksSlice";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(watchTetchExpampleTasks)

export default store;