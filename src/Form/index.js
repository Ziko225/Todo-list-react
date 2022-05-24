import "./style.css";
const form = () => (
    <form className="section__body form">
        <label className="label__input">
            <input className="form__input" required placeholder="Co jest do zrobienia?*" />
        </label>
        <label className="label__button">
            <button className="form__button">Dodaj zadanie</button>
        </label>
    </form>
);

export default form;