import { List, Item, Content, Button } from "./styled"

const TaskList = ({ tasks, removeTask, hideCheck, toggleTaskCheck }) => (
    <List>
        {tasks.map(task => (
            <Item key={task.id}
                hidden={task.check && hideCheck}>
                <Button onClick={() => toggleTaskCheck(task.id)} 
                toggleCheck>
                    {task.check
                        ? "✓"
                        : ""}</Button>
                <Content check={task.check}>
                    {task.content}
                </Content>
                <Button remove onClick={() => removeTask(task.id)}>🗑</Button>
            </Item>
        ))}
    </List>
);

export default TaskList;