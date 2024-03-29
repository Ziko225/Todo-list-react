import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../../common/Header";
import Main from "../../../common/Main";
import Nav from "../../../common/Nav";
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";
import { Content, Id } from "./styled";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <>
            <Nav />
            <Main>
                <Header title="Szczegóły zadania" />
                <Section
                    title={task ? task.content : "Błąd 404"}
                    body={
                        task ?
                            <>
                                <Content>
                                    <strong>Ukończono: {task.done ? "tak" : "Nie"}</strong>
                                    <Id><p><strong>ID Zadania:</strong> {id}</p></Id>
                                </Content>
                            </>
                            :
                            " Nie znaleziono zadania!"
                    }
                />
            </Main >
        </>
    );
};

export default TaskPage;
