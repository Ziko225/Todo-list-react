import { Button, ButtonsBlock } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice"

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        tasks.length === 0 ?
            null
            :
            <ButtonsBlock>
                <Button onClick={() => dispatch(toggleHideDone())}>{hideDone ? "Pokaż" : "Ukryj"} ukończone</Button>
                <Button onClick={() => dispatch(setAllDone())} disabled={tasks.every(({ done }) => done)}>Ukończ wszystkie</Button>
            </ButtonsBlock>
    );
};

export default Buttons;