import { List, Item, Content, Button } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
    const { tasks } = useSelector(selectTasks)
    const hideDone = useSelector(selectHideDone)
    const dispatch = useDispatch(toggleTaskDone, hideDone);
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
            ))
            }
        </List >
    );
}

export default TaskList;