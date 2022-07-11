import { useRef, useState } from "react";
import { FormBlock, FormInput, Button } from "./styled"
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const focusInput = () => {
        inputRef.current.focus();
    }
    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent.trim() === "") {
            return
        }
        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));

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