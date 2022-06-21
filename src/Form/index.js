import { useRef, useState } from "react";
import { FormBlock, FormInput, Button } from "./styled"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    }

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
                ref={inputRef}
                value={newTaskContent}
                autoFocus
                placeholder="Co jest do zrobienia?*"
                onChange={({ target }) => setNewTaskContent(target.value)}

            />
            <Button onClick={focusInput}>Dodaj zadanie</Button>
        </FormBlock>
    );
};

export default Form;