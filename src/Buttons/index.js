import "./style.css";

const Buttons = (props) => (
    props.tasks.length === 0 ?
        null
        :
        <div className="header__buttons">
            <button className={`buttons`}>{props.hideCheck ? "Pokaż" : "Ukryj"}ukończone</button>
            <button disabled={props.tasks.every(({ check }) => check)} className={`buttons`}>Ukończ wszystkie</button>
        </div>
)

export default Buttons;

