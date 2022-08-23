import Section from "../../common/Section"
import Header from "../../common/Header"
import Main from "../../common/Main"

function AutorPage() {
    return (
        <Main>
            <Header title="O autorze" />
            <Section
                title="Nazar Bychyk"
                body={<> MNanana</>}
            />
        </Main>
    );
};

export default AutorPage;
