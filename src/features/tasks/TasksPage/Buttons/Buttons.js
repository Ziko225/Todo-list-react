import { Button, ButtonsBlock } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
    selectAreTasksEmpty,
    toggleHideDone,
    setAllDone,
    selectHideDone,
    selectIsEveryTaskDone
} from "../../tasksSlice"

const Buttons = () => {
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();

    return (
        <ButtonsBlock>
            {!areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone</Button>
                    <Button onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}>Ukończ wszystkie</Button>
                </>
            )}
        </ButtonsBlock>
    );
};

export default Buttons;