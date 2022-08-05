import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task)
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex(task => task.id === taskID);
            state.tasks[index].done = !state.tasks[index].done
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true
            }
        },
        removeTask: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex(({ id }) => id === taskID);
            tasks.splice(index, 1)
        },
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, setAllDone, removeTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;