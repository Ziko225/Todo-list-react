import TaskList from "./TasksList"
import Buttons from "./Buttons"
import Header from "../../../common/Header"
import Main from "../../../common/Main"
import { addTask, removeTask, setAllDone } from "../tasksSlice"
import Section from "../../../common/Section";
import Form from "./Form"
import Search from "./Search"

function TasksPage() {
  return (
    <Main>
      <Header title="Lista zadań" />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
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

export default TasksPage;
