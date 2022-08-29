import Section from "../../common/Section"
import Header from "../../common/Header"
import Main from "../../common/Main"
import Nav from "../../common/Nav";

function Autor() {
    return (
        <>
            <Nav />
            <Main>
                <Header title="O autorze" />
                <Section
                    title="Nazar Bychyk"
                    body={<> MNanana</>}
                />
            </Main>
        </>
    );
};

export default Autor;
