import "./style.css";
const Section = ({ title, body, content, buttons }) => (

    <section className="section">
        <h2 className="section__header">{title} {buttons}</h2>
        <div className="section__body">{body}</div>
        {content}
    </section>
)

export default Section;