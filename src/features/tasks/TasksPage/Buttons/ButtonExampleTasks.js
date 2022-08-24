import { Button, ButtonsBlock } from "./styled"
import { useDispatch } from "react-redux";
import { fetchExampleTasks, } from "../../tasksSlice"

const ButtonExampleTasks = () => {
    const dispatch = useDispatch();

    return (
        <ButtonsBlock>
            <Button onClick={() => dispatch(fetchExampleTasks())}> Pobierz przykład</Button>
        </ButtonsBlock>
    );
};

export default ButtonExampleTasks;