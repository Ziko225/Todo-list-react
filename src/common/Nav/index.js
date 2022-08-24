import { Nav, Link } from "./styled"

const Navigation = () => (
    <Nav>
        <>
            <Link to="/tasks">Zadania</Link>
            <Link to="/autor">O autorze</Link>
        </>
    </Nav>
);

export default Navigation;