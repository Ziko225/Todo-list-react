
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../../common/Header";
import Main from "../../../common/Main"
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams()
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Main>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Błąd 404"}
                body={
                    task ?
                        <>
                            <strong>Ukończono: {task.done ? "tak" : "Nie"}</strong>
                            <p><strong>id:</strong> {id}</p>
                        </>
                        :
                        " Nie znaleziono zadania!"
                }
            />
        </Main >
    );
};

export default TaskPage;
