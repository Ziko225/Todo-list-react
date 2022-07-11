import Form from "./Form";
import TaskList from "./TasksList"
import Buttons from "./Buttons"
import Section from "../../common/Section"
import Header from "../../common/Header"
import Main from "../../common/Main"
import { addTask, removeTask, setAllDone } from "./tasksSlice"

function Tasks() {
  return (
    <Main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addTask={addTask} />}
      />
      <Section
        title="Lista zadań"
        buttons={<Buttons setAllDone={setAllDone} />}
        content={<TaskList removeTask={removeTask} />}
      />
    </Main>
  );
};

export default Tasks;
