import "./style.css";

const Buttons = ({ tasks, hideCheck, toggleHideCheck, setAllCheck }) => (
    tasks.length === 0 ?
        null
        :
        <div className="header__buttons">
            <button onClick={toggleHideCheck} className={"buttons"}>{hideCheck ? "Pokaż" : "Ukryj"} ukończone</button>
            <button onClick={setAllCheck} disabled={tasks.every(({ check }) => check)} className={`buttons`}>Ukończ wszystkie</button>
        </div>
)

export default Buttons;

