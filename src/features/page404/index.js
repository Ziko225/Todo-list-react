import Section from "../../common/Section"
import Header from "../../common/Header"
import Main from "../../common/Main"
import { Link } from "react-router-dom";

function Page404() {
    return (
        <Main>
            <Header title="Błąd 404" />
            <Section
                title="Strona o podanym adresie nie istnieje"
                body={
                    <>
                        <ul>
                            <li><Link to="/tasks">Powrót</Link></li>
                        </ul>
                    </>}
            />
        </Main>
    );
};

export default Page404;
