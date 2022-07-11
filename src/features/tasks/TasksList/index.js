import { List, Item, Content, Button } from "./styled"
import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

const TaskList = () => {
    const { tasks, hideDone } = useSelector(selectTasks)
    const dispatch = useDispatch(toggleTaskDone, removeTask);
    return (
        <List>
            {tasks.map(task => (
                <Item key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                        toggleDone>
                        {task.done
                            ? "✓"
                            : ""}</Button>
                    <Content
                        done={task.done}>
                        {task.content}
                    </Content>
                    <Button remove onClick={() => dispatch(removeTask(task.id))}>🗑</Button>
                </Item>
            ))}
        </List>
    );
}

export default TaskList;