import { keyboard } from "@testing-library/user-event/dist/keyboard";
import "./style.css";

const Tasks = ({ tasks, removeTask, hideCheck }) => (

    <ul className="section__body">
        {tasks.map(task => (
            <li key={task.id} className={`list__block ${task.check && hideCheck ? "list__block--hidden" : ""}`}>

                <button className="list__button list__button--checker">
                    {task.check
                        ? "✓"
                        : ""}</button>
                <span className={`list__task ${task.check ? "list__task--check" : ""}`}>
                    {task.content}
                </span>
                <button onClick={() => removeTask(task.id)} className="list__button list__button--remover">🗑</button>
            </li>
        ))}
    </ul>
)

export default Tasks;