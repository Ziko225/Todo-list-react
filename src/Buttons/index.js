import "./style.css";

const Buttons = ({tasks, hideCheck, toggleHideCheck}) => (
    tasks.length === 0 ?
        null
        :
        <div className="header__buttons">
            <button onClick={toggleHideCheck} className={"buttons"}>{hideCheck ? "Pokaż" : "Ukryj"} ukończone</button>
            <button disabled={tasks.every(({ check }) => check)} className={`buttons`}>Ukończ wszystkie</button>
        </div>
)

export default Buttons;

