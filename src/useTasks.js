import { useState, useEffect } from "react";

export const useTasks = () => {

    const storageTasks = localStorage.getItem("tasks")

    const [tasks, setTasks] = useState(
        storageTasks ? JSON.parse(storageTasks) : [])

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskCheck = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, check: !task.check };
            }

            return task;
        }))
    };

    const setAllCheck = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            check: true,
        })))
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                check: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            }
        ])
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return [tasks, removeTask, toggleTaskCheck, setAllCheck, addNewTask];
};

