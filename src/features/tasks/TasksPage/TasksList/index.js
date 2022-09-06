import { List, Item, Content, Button, Link } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";
const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))} toggleDone>
                        {task.done
                            ? "✓"
                            : ""}</Button>
                    <Content
                        done={task.done}>
                        <Link to={`/tasks/${task.id}`}> {task.content}</Link>
                    </Content>
                    <Button remove onClick={() => dispatch(removeTask(task.id))}>🗑</Button>
                </Item>
            ))}
        </List >
    )
};

export default TaskList;