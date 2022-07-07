import { Button, ButtonsBlock } from "./styled"

const Buttons = ({ tasks, hideCheck, toggleHideCheck, setAllCheck }) => (
    tasks.length === 0 ?
        null
        :
        <ButtonsBlock>
            <Button onClick={toggleHideCheck}>{hideCheck ? "Pokaż" : "Ukryj"} ukończone</Button>
            <Button onClick={setAllCheck} disabled={tasks.every(({ check }) => check)}>Ukończ wszystkie</Button>
        </ButtonsBlock>
);

export default Buttons;