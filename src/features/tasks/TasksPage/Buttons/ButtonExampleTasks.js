import { Button, ButtonsBlock } from "./styled"
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectAreExpampleTasksLoading, selectAreTasksEmpty, selectExpampleTasksError } from "../../tasksSlice"

const ButtonExampleTasks = () => {
    const dispatch = useDispatch();
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const exapmleTasksLoaded = useSelector(selectAreExpampleTasksLoading);
    const exapmleTasksError = useSelector(selectExpampleTasksError);

    return (
        !exapmleTasksError ?
            areTasksEmpty && (
                <>
                    <ButtonsBlock>
                        <Button
                            disabled={exapmleTasksLoaded} onClick={() => dispatch(fetchExampleTasks())}>{exapmleTasksLoaded ? "Ładowanie.." : "Pobierz przykład"}
                        </Button>
                    </ButtonsBlock >
                </>
            )
            : <ButtonsBlock>
                <Button disabled>Nie udało się pobrać przykładowe zadania</Button>
            </ButtonsBlock >
    );
};

export default ButtonExampleTasks;