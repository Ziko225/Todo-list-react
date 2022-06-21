import { useState } from "react";
import { useTasks } from "./useTasks"

import Form from "./Form";
import Tasks from "./Tasks"
import Buttons from "./Buttons"
import Section from "./Section"
import Header from "./Header"
import Main from "./Main"
import "./index.css";

function App() {

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
        content={<Tasks tasks={tasks} hideCheck={hideCheck} removeTask={removeTask} toggleTaskCheck={toggleTaskCheck} />}
      />
    </Main>
  );
};

export default App;
