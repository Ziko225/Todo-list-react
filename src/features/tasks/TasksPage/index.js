import { addTask, removeTask, setAllDone } from "../tasksSlice"
import ButtonExampleTasks from "./Buttons/ButtonExampleTasks"
import TaskList from "./TasksList"
import Buttons from "./Buttons/Buttons"
import Form from "./Form"
import Search from "./Search"
import Header from "../../../common/Header"
import Main from "../../../common/Main"
import Section from "../../../common/Section";
import Nav from "../../../common/Nav"

function TasksPage() {
  return (
    <>
      <Nav
      />
      <Main>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addTask={addTask} />}
        />
        <Section
          title="Wyszukiwarka"
          buttons={<ButtonExampleTasks />}
          body={<Search />}
        />
        <Section
          title="Lista zadań"
          buttons={<Buttons setAllDone={setAllDone} />}
          content={<TaskList removeTask={removeTask} />}
        />
      </Main>
    </>
  );
};

export default TasksPage;
