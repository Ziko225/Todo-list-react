import { useState } from "react";
import { FormBlock, FormInput, Button } from "./styled"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent.trim() === "") {
            return
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("")
    };

    return (
        <FormBlock onSubmit={onFormSubmit}>
            <FormInput
                value={newTaskContent}
                autoFocus
                placeholder="Co jest do zrobienia?*"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button className=" form__button">Dodaj zadanie</Button>
        </FormBlock>
    );
};

export default Form;