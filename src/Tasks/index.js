import { keyboard } from "@testing-library/user-event/dist/keyboard";
import "./style.css";

const Tasks = (props) => (

    <ul className="section__body">
        {props.tasks.map(task => (
            <li className={`list__block ${task.check && props.hideCheckTasks ? "list__block--hidden" : ""}`}>
                {key = task.id}
                <button className="list__button list__button--checker">
                    {task.check
                        ? "✓"
                        : ""}</button>
                <span className={`list__task ${task.check ? "list__task--check" : ""}`}>
                    {task.content}
                </span>
                <button className="list__button list__button--remover">🗑</button>
            </li>
        ))}
    </ul>
)

export default Tasks;