import Form from "./Form";
import Tasks from "./Tasks"
import Buttons from "./Buttons"
import Section from "./Section"
import Header from "./Header"
import Main from "./Main"
import "./index.css";
import { useState, useEffect } from "react";

function App() {
  const [hideCheck, setHideCheck] = useState(false);

  const storageTasks = localStorage.getItem("tasks")

  const [tasks, setTasks] = useState(
    storageTasks ? JSON.parse(storageTasks) : [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideCheck = () => {
    setHideCheck(hideCheck => !hideCheck);
  };

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

  return (
    <Main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        buttons={<Buttons tasks={tasks} hideCheck={hideCheck} toggleHideCheck={toggleHideCheck} setAllCheck={setAllCheck} />}
        content={<Tasks tasks={tasks} hideCheck={hideCheck} removeTask={removeTask} toggleTaskCheck={toggleTaskCheck} />}
      />
    </Main>
  );
};

export default App;
