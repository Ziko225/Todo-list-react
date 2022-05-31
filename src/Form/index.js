import { useState } from "react";
import "./style.css";
const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("")
    }
    return (
        <form className="section__body form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="label__input form__input"
                autoFocus
                placeholder="Co jest do zrobienia?*"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className=" label__button form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;