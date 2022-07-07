import { useState } from "react";
import { useTasks } from "../../useTasks"

import Form from "./Form";
import TaskList from "./TasksList"
import Buttons from "./Buttons"
import Section from "../../common/Section"
import Header from "../../common/Header"
import Main from "../../common/Main"
import "../../index.css";

function Tasks() {

  const [hideCheck, setHideCheck] = useState(false);
  const toggleHideCheck = () => { setHideCheck(hideCheck => !hideCheck); };

  const [
    tasks,
    removeTask,
    toggleTaskCheck,
    setAllCheck,
    addNewTask,
  ] = useTasks();

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
        content={<TaskList tasks={tasks} hideCheck={hideCheck} removeTask={removeTask} toggleTaskCheck={toggleTaskCheck} />}
      />
    </Main>
  );
};

export default Tasks;
